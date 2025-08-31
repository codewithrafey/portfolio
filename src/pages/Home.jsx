import React from 'react';
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      {/* Header Section */}
<div className="w-full bg-gradient-to-br from-gray-800 via-blue-400 to-gray-800 py-18 text-center">
  <h1 className="text-4xl font-bold text-white tracking-wide">Muhammad Rafey</h1>
  <p className="mt-2 text-xl text-white font-semibold">Frontend Web Developer</p>
</div>

<div className="sticky top-0 z-50 bg-blue-950/95 py-3 flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-9 shadow-md backdrop-blur-sm">
  <Link to='about' smooth={true} duration={500} className="text-white text-lg font-medium cursor-pointer px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">About</Link>
  <Link to='skills' smooth={true} duration={500} className="text-white text-lg font-medium cursor-pointer px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Skills</Link>
  <Link to='projects' smooth={true} duration={500} className="text-white text-lg font-medium cursor-pointer px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Projects</Link>
  <Link to='contact' smooth={true} duration={500} className="text-white text-lg font-medium cursor-pointer px-4 py-1 hover:bg-blue-500/20 hover:text-blue-200 rounded transition">Contact</Link>
</div>
    </>
  );
}

export default Home;
