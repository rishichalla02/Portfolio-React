import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Interlinked",
      description: "A Real time Web Chat site for communicating with peace.",
      link: "https://github.com/rishichalla02/Interlinked",
      technologies: ["React", "NodeJs", "Firebase"],
    },
    {
      id: 2,
      title: "Basic Portfolio",
      description: "A simple Portfolio site.",
      link: "https://github.com/rishichalla02/Portfolio_2.0",
      technologies: ["HTML", "CSS"],
    },
    {
      id: 3,
      title: "Chess - 2025 (Chess Game)",
      description:
        "A Chess Game for Playing with your friends and family.",
      link: "https://github.com/rishichalla02/Chess-2025-Updated",
      technologies: ["HTML & CSS", "chessboaed.js", "JavaScript"],
    },
    {
      id: 4,
      title: "Standard Portfolio",
      description: "A Newly updated portfolio with effect of Tailwind CSS.",
      link: "https://github.com/rishichalla02/Portfolio-React",
      technologies: ["React", "Node.js", "Taileind CSS"],
    },
    {
      id: 5,
      title: "Weather App",
      description: "A Weather App to check the weather of any place.",
      link: "https://github.com/rishichalla02/Weather_App",
      technologies: ["React", "OpenWeather - API", "Taileind CSS"],
    },
  ];

  return (
    <div id="projects" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of projects that demonstrate my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-300 p-6 group"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200 hover:underline"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}