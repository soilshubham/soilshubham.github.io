import React from "react";

const ProjectCard = () => {
  return (
    <div className="project-card w-full h-[22rem] p-10 text-black flex flex-col justify-end items-start">
      <div className="font-bold text-4xl">Project ABC</div>
      <div className="flex gap-4 tracking-widest mt-10 uppercase text-xs font-medium">
        <span>Next.js</span>
        <span>TailwindCSS</span>
        <span>MongoDB</span>
      </div>
    </div>
  );
};

export default ProjectCard;
