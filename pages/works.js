import { useState } from "react";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "IT Solution Website",
      image: "/allpilar-solution.png",
      technologies: ["HTML", "CSS", "Bootstrap"],
      url: "https://allpilar.vercel.app/",
    },
    {
      id: 2,
      title: "User Dashboard",
      image: "/dashboard.png",
      technologies: ["Angular", "Tailwind CSS", "Graph.js"],
      url: "https://dashb-delta.vercel.app/dashboard",
    },
    {
      id: 3,
      title: "Oikno Official Website",
      image: "/OIKNO.png",
      technologies: ["HTML", "CSS", "Bootstrap"],
      url: "https://oikno.com",
    },
    {
      id: 4,
      title: "Church Website",
      image: "/apchurch.png",
      technologies: ["Next", "Tailwind CSS"],
      url: "https://projectfour.com",
    },
    {
      id: 5,
      title: "Free Portfolio",
      image: "/portfolio1.png",
      technologies: ["Next", "Tailwind CSS", "Javascript"],
      url: "https://oikno.com",
    },
    {
      id: 6,
      title: "Amazing Portfolio",
      image: "/silaspage.png",
      technologies: ["HTML", "CSS", "Bootstrap"],
      url: "https://silas.vercel.app",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-black min-h-screen p-8 pt-20 text-white flex flex-col items-center">
      {/* Centered Write-Up */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">My Works</h1>
        <p className="mt-2 text-lg">
          Here are some of the projects I've worked on. Click on any project for more details.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-4 rounded cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 text-center font-bold">{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white relative p-4 rounded shadow-lg w-64 text-black">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-600 font-bold"
            >
              X
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 font-bold">{selectedProject.title}</h3>
            <ul className="mt-2">
              {selectedProject.technologies.map((tech, idx) => (
                <li key={idx} className="text-sm">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Open Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}