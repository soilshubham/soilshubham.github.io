import Title from "../common/Title";
import "./About.scss";

const About = () => {
  return (
    <div id="about">
      {/* <Title title="About" /> */}
      <p
        style={{ textAlign: "center" }}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="heading">
          I'm a <span>Full Stack Engineer</span> who enjoys working with{" "}
          <span>UI/UX</span>.
        </div>
        <div className="content">
          Full-stack developer with experience in React, Typescript and NodeJs.
          A Computer Science major at SRM University and settled in India. I've
          collaborated on several full stack projects with numerous businesses.
          I enjoy working with the MERN stack and I've a keen interest in UI/UX.
        </div>
      </p>
    </div>
  );
};

export default About;
