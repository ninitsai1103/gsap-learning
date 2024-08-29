import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Three3DBox2 from '../components/3Dbox2';

gsap.registerPlugin(ScrollTrigger);

export default function Combine2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            setRotation(self.progress * Math.PI * 2);
          },
        },
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ height: '200vh' }} className='bg-slate-700'>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} shadows>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} castShadow />
        <Three3DBox2 rotation={rotation} />
        {/* 添加地板來接收陰影 */}
        <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[-2, -2, 0]}
          >
            <planeGeometry args={[10, 10]} />
            <shadowMaterial opacity={0.5} />
          </mesh>
      </Canvas>
    </div>
  );
};