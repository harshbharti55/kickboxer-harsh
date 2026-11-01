'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function RingRopes() {
  const levels = [0.82, 1.16, 1.5, 1.84];
  const half = 3.35;
  const ropes = levels.flatMap((y) => [
    { position: [0, y, -half] as [number, number, number], scale: [half * 2, 0.035, 0.035] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { position: [0, y, half] as [number, number, number], scale: [half * 2, 0.035, 0.035] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { position: [-half, y, 0] as [number, number, number], scale: [half * 2, 0.035, 0.035] as [number, number, number], rotation: [0, Math.PI / 2, 0] as [number, number, number] },
    { position: [half, y, 0] as [number, number, number], scale: [half * 2, 0.035, 0.035] as [number, number, number], rotation: [0, Math.PI / 2, 0] as [number, number, number] },
  ]);
  return (
    <group>
      {ropes.map((rope, i) => (
        <mesh key={i} position={rope.position} scale={rope.scale} rotation={rope.rotation}>
          <cylinderGeometry args={[0.035, 0.035, 1, 8]} />
          <meshStandardMaterial color={i % 4 === 0 ? '#e8c56a' : '#70d7f2'} metalness={0.55} roughness={0.3} emissive={i % 4 === 0 ? '#8c6420' : '#123d58'} emissiveIntensity={0.35} />
        </mesh>
      ))}
      {[-1, 1].flatMap((x) => [-1, 1].map((z, i) => (
        <mesh key={x + ':' + z} position={[x * half, 1.15, z * half]}>
          <cylinderGeometry args={[0.09, 0.12, 2.35, 12]} />
          <meshStandardMaterial color="#d9eaf3" metalness={0.8} roughness={0.24} />
        </mesh>
      )))}
    </group>
  );
}

function MovingLights() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = Math.sin(clock.elapsedTime * 0.16) * 0.18;
  });
  return (
    <group ref={group}>
      <mesh position={[-3.8, 5.8, -1.8]} rotation={[0.38, 0, 0.42]}>
        <coneGeometry args={[1.65, 7.5, 32, 1, true]} />
        <meshBasicMaterial color="#70d7f2" transparent opacity={0.075} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[3.7, 5.7, -1.2]} rotation={[0.4, 0, -0.42]}>
        <coneGeometry args={[1.55, 7.2, 32, 1, true]} />
        <meshBasicMaterial color="#e8c56a" transparent opacity={0.07} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>
      <spotLight position={[-4, 7, 2]} angle={0.48} penumbra={0.8} intensity={42} color="#8bdcf5" />
      <spotLight position={[4, 7, -1]} angle={0.42} penumbra={0.8} intensity={38} color="#f1cf78" />
    </group>
  );
}

function ArenaFloor() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.12, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#071426" roughness={0.82} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[7.4, 0.24, 7.4]} />
        <meshStandardMaterial color="#102b46" metalness={0.48} roughness={0.38} />
      </mesh>
      <mesh position={[0, 0.14, 0]}>
        <boxGeometry args={[6.8, 0.08, 6.8]} />
        <meshStandardMaterial color="#173c5b" metalness={0.28} roughness={0.52} />
      </mesh>
      <mesh position={[0, 0.19, 0]}>
        <boxGeometry args={[5.6, 0.012, 5.6]} />
        <meshBasicMaterial color="#70d7f2" transparent opacity={0.2} />
      </mesh>
      <mesh position={[0, 0.205, 0]}>
        <ringGeometry args={[1.3, 1.34, 64]} />
        <meshBasicMaterial color="#e8c56a" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function ArenaDust() {
  const points = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 13;
      positions[i * 3 + 1] = Math.random() * 5.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.012;
  });
  return (
    <points ref={ref} geometry={points}>
      <pointsMaterial color="#b8eafa" size={0.025} transparent opacity={0.48} sizeAttenuation />
    </points>
  );
}

function Arena() {
  return (
    <>
      <color attach="background" args={['#081629']} />
      <fog attach="fog" args={['#081629', 8, 23]} />
      <ambientLight intensity={0.8} color="#9dcce5" />
      <hemisphereLight args={['#b8eafa', '#071426', 1.1]} />
      <ArenaFloor />
      <RingRopes />
      <MovingLights />
      <ArenaDust />
    </>
  );
}

export default function FightArenaScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-65" aria-hidden="true">
      <Canvas
        camera={{ position: [8.8, 5.4, 10.5], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        onCreated={({ gl }) => { gl.setClearColor('#081629', 0); }}
      >
        <Arena />
      </Canvas>
    </div>
  );
}
