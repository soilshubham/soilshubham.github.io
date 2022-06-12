import CoverImage from "../../assets/cover.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main id="hero">
      <div className="main-wrapper">
        <div className="name-wrapper">
          <div className="name-1">Sahil</div>
          <div className="name-2">shubham</div>
        </div>
        <img src={CoverImage} alt="Sahil Shubham" />
        {/* <div className="text-2">サヒル</div> */}
      </div>
    </main>
  );
};

export default HeroSection;
