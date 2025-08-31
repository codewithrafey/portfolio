import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

function Project() {
  const projects = [
    {
      title: "Ecommerce Website",
      desc: "An ecommerce platform built with React.",
      link: "https://mensfashion-1.vercel.app/",
    },
{
  title: "Agency App",
  desc: "Agency landing page built with React and Framer Motion.",
  link: "https://agency-app-chi.vercel.app/#.",
},
    {
      title: "Ecommerce Website",
      desc: "An ecommerce platform built with React.",
      link: "https://zebi-xi.vercel.app/",
    },
    {
      title: "Ecommerce Website",
      desc: "An ecommerce platform built with HTML, CSS and JS.",
      link: "https://ecommerce-web-com.netlify.app/",
    },
    {
      title: "Spotify Clone",
      desc: "A clone of Spotify with modern UI using HTML, CSS and JS.",
      link: "https://spotify-clone-tech.netlify.app/",
    },
    {
      title: "Weather App",
      desc: "Weather forecasting app with live API integration.",
      link: "https://climate-app-io.netlify.app/",
    },
    {
      title: "Construction Website",
      desc: "A construction company portfolio website design.",
      link: "https://constructio.netlify.app/",
    },
    {
      title: "Currency Converter",
      desc: "Currency converter app with real-time rates.",
      link: "https://currency-converter-tech.netlify.app/",
    },
    {
      title: "News App",
      desc: "A news app with category-based live updates.",
      link: "https://news-app-info.netlify.app/",
    },
  ];

  return (
    <div id='projects' className="w-full py-16 px-6 sm:px-14 lg:px-28 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Section Heading */}
      <h2 className="text-xl sm:text-3xl font-bold text-gray-900 relative inline-block mb-12">
        Projects
        <span className="absolute left-0 -bottom-3 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded"></span>
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">{project.title}</h3>
            <p className="mt-3 text-gray-600">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition"
            >
              View Project <HiArrowLongRight className="ml-1 text-xl" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
