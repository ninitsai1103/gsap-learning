import { useRef } from "react";

export default function Box2(): JSX.Element {
  const box2Ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        className="w-24 h-24 flex justify-center items-center bg-[#f3d9af] rounded-lg"
        ref={box2Ref}
      >
        <div>Box2</div>
      </div>
    </>
  );
}
