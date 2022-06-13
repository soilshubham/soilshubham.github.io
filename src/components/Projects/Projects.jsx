import Title from "../common/Title";
import "./Projects.css";
import Proj1 from "../../assets/proj1.png";
import Proj2 from "../../assets/proj2.png";
import Proj3 from "../../assets/proj3.png";

const Projects = () => {
  return (
    <div id="projects">
      <Title title="Projects" />
      <div className="project-wrapper">
        {/* =================================================== */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <div className="project-card-image">
            <img src={Proj1} alt="" />
            <div className="rank">01</div>
          </div>
          <div className="project-card-info">
            <div className="title">
              <strong>Birthday Reminder</strong>
            </div>
            <div className="desc">
              A full-stack web application to remind you of your friends and
              family birthdays.
            </div>
            <div className="info-links">
              <a
                href="https://github.com/soilshubham/SaveDaDay"
                target={"_blank"}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* ===================================================== */}
        <div
          className="project-card card-alter"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="project-card-image">
            <img src={Proj2} alt="" />
            <div className="rank">02</div>
          </div>
          <div className="project-card-info">
            <div className="title">Running Late - Game</div>
            <div className="desc">
              An isometric game where you have to manage your time and resources
              to get to your destination.
            </div>
            <div className="info-links">
              <a
                href="https://soilshubham.itch.io/running-late"
                target={"_blank"}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* ===================================================== */}
        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <div className="project-card-image">
            <img src={Proj3} alt="" />
            <div className="rank">03</div>
          </div>
          <div className="project-card-info">
            <div className="title">Sudoku Solver</div>
            <div className="desc">
              A sudoku solver with GUI that can solve any sudoku puzzle in
              seconds.
            </div>
            <div className="info-links">
              <a
                href="https://github.com/soilshubham/Sudoku-Solver"
                target={"_blank"}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
