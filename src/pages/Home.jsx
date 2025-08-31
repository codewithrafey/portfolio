import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-gradient-to-br from-gray-800 via-blue-400 to-gray-800 py-18 text-center">
        <h1 className="text-4xl font-bold text-white tracking-wide">Muhammad Rafey</h1>
        <p className="mt-2 text-xl text-white font-semibold">Frontend Web Developer</p>
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-blue-950/95 py-3 shadow-md backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-end sm:justify-center items-center">

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6">
            <Link to="about" smooth={true} duration={500} className="text-white text-lg font-medium px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">About</Link>
            <Link to="skills" smooth={true} duration={500} className="text-white text-lg font-medium px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Skills</Link>
            <Link to="projects" smooth={true} duration={500} className="text-white text-lg font-medium px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="text-white text-lg font-medium px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-2 flex flex-col gap-2 px-4">
            <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-white text-lg font-medium px-4 py-2 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">About</Link>
            <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-white text-lg font-medium px-4 py-2 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Skills</Link>
            <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-white text-lg font-medium px-4 py-2 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Projects</Link>
            <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-white text-lg font-medium px-4 py-2 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Contact</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
