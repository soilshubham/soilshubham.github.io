import "./Projects.scss";
import Proj1 from "../../assets/1.png";
import Proj2 from "../../assets/2.png";
import Proj3 from "../../assets/3.png";
import { CgArrowLongRight as ExternalIcon } from "react-icons/cg";
import data from "../../constants/data.json";
import { HiOutlineHashtag as HashIcon } from "react-icons/hi";

const Projects = () => {
  const projImgs = [Proj1, Proj2, Proj3];

  return (
    <div id="projects">
      {/* <Title title="Projects" /> */}
      <div className="header">
        <span />
        Projects
      </div>
      <div className="project-wrapper">
        {data.projects.map((project, index) => {
          return (
            <div
              className="project-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="project-card-image">
                <img src={projImgs[index]} alt="" />
                <div className="rank">
                  {index < 9 ? "0" + (index + 1) : index + 1}
                </div>
              </div>
              <div className="project-card-info">
                <div className="title">
                  <strong>{project.name}</strong>
                </div>
                <div className="desc">{project.desc}</div>
                <a
                  href={project.url}
                  target={"_blank"}
                  rel="noreferrer"
                  className="info-links"
                >
                  <span>Learn More </span>
                  <ExternalIcon />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
