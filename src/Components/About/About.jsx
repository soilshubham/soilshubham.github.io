import React from "react";
import Avatar from "../../avatar.png";
const About = () => {
  return (
    <div className="relative z-10 mt-[22rem] md:mt-[25rem] flex justify-center gap-10 items-center flex-wrap">
      <img src={Avatar} alt="sahil" className="w-[20rem]" />
      <div className="max-w-xl text-white px-4">
        <div className="font-semibold tracking-wide mb-3 text-3xl text-center md:text-left">
          About Me
        </div>
        <div className="font-light tracking-wider text-[#e6fdffae] text-center md:text-left">
          Design-minded full stack developer, involved with{" "}
          <span className="text-primary">MERN stack</span>. Interested in{" "}
          <span className="text-primary">
            Game development, Augmented & Virtual Realities, UI/UX
          </span>{" "}
          and <span className="text-primary">Graphic designing</span>. Pursuing
          B.Tech Degree in Computer Science and Engineering at SRM University,
          India.
        </div>
      </div>
    </div>
  );
};

export default About;
