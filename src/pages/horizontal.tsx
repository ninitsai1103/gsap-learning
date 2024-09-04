import {useRef} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
export default function Horizontal(): JSX.Element {
  const horizontalRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const sections = gsap.utils.toArray('section');
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (horizontalRef.current && isDesktop) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 0.1,
          markers: true,
        },
      });
    } else {
      // 如果螢幕寬度小於 768px，不進行動畫
      gsap.set(sections, { clearProps: 'all' }); // 清除動畫屬性，確保不受影響
    }
  } , {scope: horizontalRef});
  return (
    <>
      <div className="p-12 min-h-4 flex flex-col justify-center items-center bg-black text-white">
        <div className="max-w-[500px]">
          <div className="text-3xl">Title</div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos
            velit repellendus minus, id vero nihil. Vel, velit! Quis aperiam
            officiis cupiditate dolores repellat! Sequi id neque cupiditate.
            Quam, repellat.lorem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate ad ipsam dolor eius, consequuntur sed et
            quos illo, doloribus itaque aut ut placeat reprehenderit temporibus
            laudantium repellendus deserunt aliquid nostrum.
          </div>
        </div>
      </div>
      <div ref={horizontalRef} className="md:w-[300dvw] w-[100dvw] h-[100dvh] md:flex no-wrap">
        <section className="w-[100dvw] h-[100dvh] bg-blue-300 flex flex-col justify-center items-center">
          <div className="">1</div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            esse ullam deleniti libero quod soluta, sit odit, accusamus facilis
            voluptas, quas consequuntur cupiditate possimus maiores doloremque
            quae optio accusantium repellat.
          </div>
        </section>
        <section className="w-[100dvw] h-[100dvh] bg-red-300 flex flex-col justify-center items-center">
        <div className="">2</div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            esse ullam deleniti libero quod soluta, sit odit, accusamus facilis
            voluptas, quas consequuntur cupiditate possimus maiores doloremque
            quae optio accusantium repellat.
          </div>
        </section>
        <section className="w-[100dvw] h-[100dvh] bg-green-300 flex flex-col justify-center items-center">
        <div className="">3</div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            esse ullam deleniti libero quod soluta, sit odit, accusamus facilis
            voluptas, quas consequuntur cupiditate possimus maiores doloremque
            quae optio accusantium repellat.
          </div>
        </section>
      </div>
    </>
  );
}
