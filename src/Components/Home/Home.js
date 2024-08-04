import React from "react";
import HeroSection from "../HeroSection";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import About from "../About/About";
import Ourwork from "../Ourwork/Ourwork";

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Ourwork />
      <About />
      <Contact />
    </>
  );
}

export default Home;
