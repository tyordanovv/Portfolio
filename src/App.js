import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Services from "./routes/Services";
import Contact from "./routes/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
