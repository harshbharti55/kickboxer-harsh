
"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  Environment,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import FloatingAthlete from "./FloatingAthlete";
import Particles from "./Particles";

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
      >
        {/* Background */}
        <color attach="background" args={["#050505"]} />

        {/* Lights */}
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          color="#FFD54F"
        />

        <pointLight
          position={[-5, 4, 2]}
          intensity={2}
          color="#ffcc66"
        />

        <spotLight
          position={[0, 8, 4]}
          angle={0.35}
          penumbra={1}
          intensity={5}
          color="#FFD700"
        />

        {/* Sparkles */}
        <Sparkles
          count={250}
          scale={15}
          size={5}
          speed={0.4}
          color="#FFD700"
        />

        {/* Particles */}
        <Particles />

        {/* Athlete */}
        <Float
          speed={2}
          rotationIntensity={0.3}
          floatIntensity={1}
        >
          <FloatingAthlete />
        </Float>

        {/* Environment */}
        <Environment preset="city" />

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
