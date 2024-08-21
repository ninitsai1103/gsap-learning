import React from "react";
import Index from "./pages/index";
import Gsap from "./pages/gsap";
import ThreeJs from "./pages/three-js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/gsap" element={<Gsap />}/>
        <Route path="/3js" element={<ThreeJs />}/>
      </Routes>
    </Router>
  );
}
