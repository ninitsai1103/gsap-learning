import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Three3DBox3 from '../components/3Dbox3';
import * as THREE from 'three';

// 確保 GSAP 插件註冊
gsap.registerPlugin(ScrollTrigger);

// 創建一個自定義的 camera 控制元件
const CameraController: React.FC = () => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useGSAP(() => {
    gsap.to(cameraRef.current.position, {
      x: 10,
      y: -10,
      z: -10,
      scrollTrigger: {
        trigger: 'canvas',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, []);

  return null;
};

const Combine3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-[200vh] bg-slate-700">
      <Canvas
        className="fixed inset-0 w-full h-full"
        shadows
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <CameraController />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} castShadow />
        <Three3DBox3 />
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.5} />
        </mesh>
      </Canvas>
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Scrolling 3D Scene</h1>
        <p className="text-xl text-white">Scroll down to see the camera move!</p>
      </div>
    </div>
  );
};

export default Combine3;