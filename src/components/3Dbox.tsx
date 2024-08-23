import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 定義組件的屬性類型
interface ThreeDBoxProps {
    position?: [number, number, number];
  }

export default function ThreeDBox({ position = [0, 0, 0] }: ThreeDBoxProps): JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // 每幀更新 rotation
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef} position={position} rotation={[0.5, 0.5, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={"#f3d9af"}
        roughness={1}
        metalness={0.7}
      />
    </mesh>
  );
}
