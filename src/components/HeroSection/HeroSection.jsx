import CoverImage from "../../assets/cover.png";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <main id="hero">
      <div className="main-wrapper">
        <div className="name-wrapper">
          <div className="name-1" data-aos="fade-right">
            sahil
          </div>
          <div className="tagline" data-aos="fade-right" data-aos-delay="200">
            Designer + Developer
          </div>
          <div
            className="cta-container"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <a
              href="https://twitter.com/messages/compose?recipient_id=763040225551536128&text=hewo%20cutiee%20%3Eu%3C"
              target="_blank"
              className="cta"
              rel="noreferrer"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={CoverImage}
          alt="Sahil Shubham"
        />
        {/* <div className="text-2">サヒル</div> */}
      </div>
    </main>
  );
};

export default HeroSection;
