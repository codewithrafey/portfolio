import React from "react";

function Skills() {
  return (
    <div
      id="skills"
      className="w-full py-16 px-6 sm:px-14 lg:px-28 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100"
    >
      {/* Heading */}
      <h2 className="text-xl sm:text-3xl font-bold text-gray-900 relative inline-block mb-12">
        Skills
        <span className="absolute left-0 -bottom-3 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded"></span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "Tailwind CSS",
          "React",
        ].map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-6 py-12 text-center 
                       transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-800">{skill}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
