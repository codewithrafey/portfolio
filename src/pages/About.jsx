import React from 'react';

function About() {
  return (
    <div id='about' className="w-full py-12 px-4 sm:px-14 lg:px-30 bg-white">
      <h2 className="text-xl sm:text-3xl font-bold text-gray-900 relative inline-block mb-9">
        About Me
        <span className="absolute left-0 -bottom-3 h-1 w-full bg-gradient-to-r from-blue-600  to-gray-500 rounded"></span>
      </h2>

      <p className="text-gray-700 text-lg md:font-stretch-95% font-light">
        Building modern, responsive, and user-friendly websites. Passionate about clean code and seamless digital experiences. Expert in front-end technologies. Turning ideas into reality with creativity and precision. Always learning, innovating, and optimizing for the web.
      </p>
    </div>
  );
}

export default About;
