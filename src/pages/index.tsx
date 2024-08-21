import React from "react";
import {Link} from "react-router-dom";

export default function Index() {
  return (
    <>
        <div className="w-full h-screen flex justify-center items-center">
            <div className="p-4 flex flex-col justify-center items-center rounded-lg bg-[#bdf3af]">
                <div className="text-3xl">Let's get started</div>
                <Link className="my-2 p-2 rounded-lg bg-[#ecf3af]" type="button" to={"/gsap"}>GSAP Learning</Link>
                <Link className=" my-2 p-2 rounded-lg bg-[#ecf3af]" type="button" to={"/3js"}>Three Js Learning</Link>
            </div>
        </div>
    </>
  )
}
