import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="text-white mt-[18rem]">
      <div className="text-3xl font-semibold tracking-wide">
        Projects I've Done
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 md:gap-6 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
