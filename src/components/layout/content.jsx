import React from "react";
import "./content.css";
import { Routes, Route } from "react-router-dom";
import About from "../../screens/examples/about";
import Home from "../../screens/examples/home";
import Params from "../../screens/examples/params";
import NotFound from "../../screens/examples/not-found";

const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/params/:id" element={<Params />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Content;
