
"use client";

import { Float, Image, RoundedBox } from "@react-three/drei";

export default function FloatingAthlete() {
  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={1.2}
    >
      <group>

        {/* Gold Platform */}
        <mesh position={[0, -2.2, 0]}>
          <cylinderGeometry args={[2, 2.2, 0.35, 64]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={1}
            roughness={0.15}
            emissive="#8B6B00"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Glowing Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <ringGeometry args={[2.3, 2.6, 64]} />
          <meshBasicMaterial
            color="#FFD700"
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Athlete Image */}
        <RoundedBox
          args={[2.8, 4, 0.15]}
          radius={0.15}
          smoothness={8}
        >
          <meshStandardMaterial
            color="#111111"
            metalness={0.4}
            roughness={0.2}
          />
        </RoundedBox>

        <Image
          url="/profile.jpg"
          scale={[2.55, 3.75]}
          position={[0, 0, 0.09]}
          transparent
        />

      </group>
    </Float>
  );
}
