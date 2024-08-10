// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-container w-full flex px-9 py-7 items-center border-2 bg-[]">
      <h1 className="flex w-[20%] font-bold justify-center text-4xl">DICS</h1>
      {/* <h3 className="font-bold mb-2 text-4xl">DICS</h3> */}
      <div className="z-100">{/* <ServicesDropdown/> */}</div>

      <div className="Links flex gap-[102px] w-[80%] z-9 font-sans font-[500] text-[22px] pl-[112px]">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">All Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contactus">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
