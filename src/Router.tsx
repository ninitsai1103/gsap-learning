import React from "react";
import Index from "./pages/index";
import Gsap from "./pages/gsap";
import ThreeJs from "./pages/three-js";
import Combine from "./pages/combine";
import Combine2 from "./pages/combine2";
import Combine3 from "./pages/combine3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/gsap" element={<Gsap />}/>
        <Route path="/3js" element={<ThreeJs />}/>
        <Route path="/combine" element={<Combine />}/>
        <Route path="/combine2" element={<Combine2 />}/>
        <Route path="/combine3" element={<Combine3 />}/>
      </Routes>
    </Router>
  );
}
