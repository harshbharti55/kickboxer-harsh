"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function Particles() {
  const particles = useMemo(() => {
    const positions = new Float32Array(1500);

    for (let i = 0; i < 1500; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    return positions;
  }, []);

  return (
    <Points positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFD700"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
