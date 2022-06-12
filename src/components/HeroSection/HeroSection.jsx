import CoverImage from "../../assets/cover.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main id="hero">
      <div className="main-wrapper">
        <div className="name-wrapper">
          <div className="name-1">sahil</div>
          <div className="tagline">Designer + Developer</div>
          <a
            href="https://twitter.com/messages/compose?recipient_id=763040225551536128&text=hewo%20cutiee%20%3Eu%3C"
            target={"_blank"}
            className="cta"
          >
            Let's Talk
          </a>
        </div>
        <img src={CoverImage} alt="Sahil Shubham" />
        {/* <div className="text-2">サヒル</div> */}
      </div>
    </main>
  );
};

export default HeroSection;
