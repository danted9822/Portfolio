import React,  { Suspense, useEffect } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function App() {

  useEffect(() => {
    document.title = "hpeter-portfolio";
  }, []);

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>

    </Suspense>

  );
}


