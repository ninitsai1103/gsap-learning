import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface RotatingCubeProps {
  rotation: number;
}

const Three3DBox2: React.FC<RotatingCubeProps> = ({ rotation }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation;
      meshRef.current.rotation.y = rotation * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default Three3DBox2;