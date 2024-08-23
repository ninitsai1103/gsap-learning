import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeDBox from "../components/3Dbox";

export default function ThreeJs() {
  return (
    <>
      <div className="bg-slate-500 w-full h-screen flex justify-center items-center">
        <Canvas shadows>
          {/* 環境光，照亮所有方向的物體 */}
          <ambientLight intensity={0.5} />
          {/* 點光源，啟用陰影 */}
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            castShadow
            intensity={1.5}
          />
          <ThreeDBox position={[0, -1, 0]}/>
          {/* 添加地板來接收陰影 */}
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
          >
            <planeGeometry args={[10, 10]} />
            <shadowMaterial opacity={0.5} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}
