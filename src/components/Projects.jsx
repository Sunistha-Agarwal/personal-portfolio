import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-[2px] realative bg-gradient-to-r from-blue-800 to-orange-800  rounded-4xl m-4"
    >
      <div className="bg-gray-800/85 border border-gray-600 rounded-4xl p-4 backdrop-blur-lg ">
        <h2 className="text-3xl font-bold text-white relative after:content-[''] after:block after:w-36 after:h-1 after:bg-blue-500 after:mt-1">
          My Projects
        </h2>
        <div className="space-y-6 text-gray-300 rounded-3xl mt-4">
          <div className="p-4">
            <h3 className="text-2xl font-semibold">
              Project 1: Spotify Interface Clone
            </h3>
            <p className="mt-2">
              This project was a clone of the Spotify interface made using HTML
              and CSS. It is responsive and user-friendly.
            </p>
            <a
              href="http://link-to-website-a.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              Visit Spotify Interface Clone
            </a>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-semibold">
              Project 2: Weather Card Generator
            </h3>
            <p className="mt-2">
              This project is a weather card generator made with React.
            </p>
            <a
              href="http://link-to-website-b.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              Visit Weather Card Generator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
