import React from "react";
import Avatar from "../../avatar.png";
const About = () => {
  return (
    <div className="relative z-10 mt-[22rem] md:mt-[25rem] flex justify-center gap-10 items-center flex-wrap">
      <img src={Avatar} alt="sahil" className="w-[20rem]" />
      <div className="max-w-xl text-white px-4">
        <div className="font-bold tracking-wide mb-3 text-3xl text-center md:text-left">
          About me
        </div>
        <div className="font-light tracking-wider text-[#e6fdff98] text-center md:text-left">
          Design-minded full stack developer, involved with MERN stack.
          Interested in{" "}
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
