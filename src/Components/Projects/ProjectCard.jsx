import React from "react";

const ProjectCard = () => {
  return (
    <div className="project-card w-full h-[19rem] p-10 text-black flex flex-col justify-end items-start hover:scale-[101%]">
      <div className="font-bold text-3xl">Project ABC</div>
      <div className="flex gap-3 tracking-widest mt-10 uppercase text-[0.7rem] font-medium">
        <span>Next.js</span>
        <span>TailwindCSS</span>
        <span>MongoDB</span>
      </div>
    </div>
  );
};

export default ProjectCard;
