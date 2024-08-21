import { useState, useEffect,useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Box1 from "../components/box1";
import Box2 from "../components/box2";
import { ScrollTrigger, Draggable, Flip } from "gsap/all";  

export default function Gsap() {
  useGSAP(() => {
    gsap.to(".box-rolling", {
      rotate: 360,
      duration: 2,
      ease: "none",
      repeat: -1,
    });
  });

  const box2Ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (box2Ref.current) {
      gsap.to(box2Ref.current, {
        rotate: 360,
        duration: 2,
        ease: "none",
        repeat: -1,
      });
    }
  });

  const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  useGSAP(() => {
    tl.to(".box-timeline-basic", { x: 100, duration: 1 });
    tl.to(".box-timeline-basic", { y: 50, duration: 1, delay: 1 });
    tl.to(".box-timeline-basic", { opacity: 0, duration: 1, delay: 2 });
  });

  const tl2 = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  //使用３，表示該動畫在前一個動畫三秒後開始
  // useGSAP(() => {
  //   tl2.to(".box-timeline-position-box4", { x: 100, duration: 2, ease: "elastic" });
  //   tl2.to(".box-timeline-position-box5", { x: 200, duration: 1 }, 3);
  // });

  // 使用 "<" 符號，表示這個動畫會與前一個動畫同時開始
  // useGSAP(() => {
  //   tl2.to(".box-timeline-position-box4", { x: 100, duration: 2, ease: "elastic" });
  //   tl2.to(".box-timeline-position-box5", { x: 200, duration: 1 }, "<");
  // });

  // 使用 ">" 符號，表示這個動畫立即在前一個動畫結束後開始
  // useGSAP(() => {
  //   tl2.to(".box-timeline-position-box4", { x: 100, duration: 2, ease: "elastic" });
  //   tl2.to(".box-timeline-position-box5", { x: 200, duration: 1 }, ">");
  // });

  // 插入第二個動畫，這個動畫會在 "myLabel" 標籤之後的 10 秒處開始
  useGSAP(() => {
    tl2.to(
      ".box-timeline-position-box4",
      {
        x: 100,
        duration: 2,
        ease: "elastic",
        onComplete: () => {
          console.log("first onComplete");
        },
      },
      "label"
    );
    tl2.to(
      ".box-timeline-position-box5",
      {
        x: 200,
        duration: 1,
        onComplete: () => {
          console.log("second onComplete");
        },
      },
      "label+=10"
    );
  });

  const [EndX, setEndX] = useState<number>(0);
  const tl3 = gsap.timeline();
  // runs after first render and every time `endX` changes
  useGSAP(() => {
    tl3.to(".box-dependency", { x: EndX, duration: 1 });
  }, [EndX]);
  const handleXChange = () => {
    setEndX(EndX + 100);
  };

  const [EndY, setEndY] = useState<number>(0);
  const tl4 = gsap.timeline();
  useGSAP(
    () => {
      tl4.to(".box-dependency-scope", { y: EndY, duration: 1 });
    },
    { dependencies: [EndY], scope: ".box-scope" }
  );
  const handleYChange = () => {
    setEndY(EndY + 100);
  };

  gsap.registerPlugin(Draggable, ScrollTrigger, Flip);
  const drag = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    if(drag.current){
      Draggable.create(drag.current, {
        type: "x,y",
        bounds: {
          minX: 0,
          minY: 0,
          maxX: 300,
          maxY: 300
        }
      })
    }
  })

  return (
    <>
      <h5>Tweening</h5>
      <h6 className="my-3">selected by class selector</h6>
      <div className="w-24 h-24 flex justify-center items-center bg-[#f3afaf] rounded-lg box-rolling">
        <div>Box1</div>
      </div>
      <h6 className="my-3">selected by ref</h6>
      <div
        className="w-24 h-24 flex justify-center items-center bg-[#f3d9af] rounded-lg"
        ref={box2Ref}
      >
        <div>Box2</div>
      </div>
      <h6 className="my-3">nesting - class selector vs. ref</h6>
      <Box1 />
      {/* 如果將ref傳入元件中，外層則不會動，元件會動起來 */}
      <Box2 />
      <h5>Timeline Basic</h5>
      <div className="w-24 h-24 flex justify-center items-center bg-[#d1f3af] rounded-lg box-timeline-basic">
        <div>Box3</div>
      </div>
      <div className="mt-12">
        <button
          className="my-2 p-2 rounded-lg bg-[#afd7f3]"
          type="button"
          onClick={() => tl.play()}
        >
          play
        </button>
        <button
          className="my-2 p-2 rounded-lg bg-[#afd7f3]"
          type="button"
          onClick={() => tl.pause()}
        >
          pause
        </button>
        <button
          className="my-2 p-2 rounded-lg bg-[#afd7f3]"
          type="button"
          onClick={() => tl.resume()}
        >
          resume
        </button>
        <button
          className="my-2 p-2 rounded-lg bg-[#afd7f3]"
          type="button"
          onClick={() => tl.seek(1.5)}
        >
          seek 1.5s
        </button>
        <button
          className="my-2 p-2 rounded-lg bg-[#afd7f3]"
          type="button"
          onClick={() => tl.reverse()}
        >
          reverse
        </button>
      </div>
      <h5>Timeline Positioning animations</h5>
      <div className="w-24 h-24 flex justify-center items-center bg-[#afc1f3] rounded-lg box-timeline-position-box4">
        <div>Box4</div>
      </div>
      <div className="w-24 h-24 flex justify-center items-center bg-[#f3afcf] rounded-lg box-timeline-position-box5">
        <div>Box5</div>
      </div>
      <h5>Dependency</h5>
      <div
        className="w-24 h-24 flex justify-center items-center bg-[#afc1f3] rounded-lg cursor-pointer box-dependency"
        onClick={handleXChange}
      >
        <div>Box6</div>
      </div>
      <h5>Dependency & Scope</h5>
      <div className="flex bg-slate-500 w-full p-4 box-scope">
        <div
          className="w-24 h-24 flex justify-center items-center bg-[#f3caaf] rounded-lg cursor-pointer box-dependency-scope"
          onClick={handleYChange}
        >
          <div>Box7</div>
        </div>
      </div>
      <div
        className="w-24 h-24 flex justify-center items-center bg-[#aff3bb] rounded-lg cursor-pointer box-dependency-scope"
        onClick={handleYChange}
      >
        <div>Box8</div>
      </div>
      <h5>Plugin</h5>
      <div ref = {drag} className="w-24 h-24 flex justify-center items-center bg-[#afe8f3] rounded-lg box-draggable">
        <div>Draggable</div>
      </div>
    </>
  );
}
