import "./Homepage.css";
import GlowGradient from "../../glow.png";
import PatternSVG from "../../pattern.svg";

const Homepage = () => {
  return (
    <>
      <div className="text-white p-7 pt-32 md:p-10 md:pt-32 flex flex-col gap-7 justify-between items-start font-inter relative z-10">
        <div className="font-light text-xs tracking-[0.25rem] uppercase">
          Hi there, I'm
        </div>
        <div className="font-bold text-6xl md:text-8xl flex flex-col md:flex-row md:gap-5 gap-0">
          <span className="anim-text">sahil</span>{" "}
          <span className="">shubham</span>
        </div>
        <div className="uppercase tracking-[0.3rem] mt-8 font-semibold text-xs md:text-sm text-primary">
          Designer + Developer
        </div>
        <div className="font-thin text-xs leading-6 md:text-sm tracking-widest opacity-60 lowercase ">
          I am a design minded full stack developer
        </div>
        <div className="">
          <button
            className="md:mt-6 mt-2 text-sm md:text-base 
          bg-primary text-black font-semibold p-3 px-6 md:py-3 
          md:px-10 rounded-lg cursor-pointer hover:scale-105 transition-transform"
          >
            Let's Talk
          </button>
        </div>
      </div>
      <img
        src={GlowGradient}
        alt=""
        className="fixed top-28 md:-top-16 -left-4 md:-left-36 scale-150 w-full md:w-full z-[1]"
      />
      <img
        src={PatternSVG}
        alt=""
        className="absolute -right-[8rem] -top-[20rem] md:-top-[7rem] md:right-0 opacity-10 md:scale-100 scale-50"
      />
    </>
  );
};

export default Homepage;
