import CoverImage from "../../assets/cover.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main id="hero">
      <div className="main-wrapper">
        <img src={CoverImage} alt="Sahil Shubham" />
        <div className="text-wrapper">
          <div className="text-1">sahil</div>
          <div className="text-2">サーヒル</div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
