import Title from "../common/Title";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <Title title="Projects" />
      <div className="project-wrapper">
        <div className="project-card">
          <div className="project-card-image">
            <img
              src={
                "https://images.unsplash.com/photo-1654124803462-e01f93b1550a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              alt=""
            />
            <div className="rank">01</div>
          </div>
          <div className="project-card-info">
            <div className="title">
              <strong>Birthday Reminder</strong>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </div>
            <div className="info-links">
              <a href=" ">Learn More</a>
            </div>
          </div>
        </div>
        <div className="project-card card-alter">
          <div className="project-card-image">
            <img
              src={
                "https://images.unsplash.com/photo-1654124803462-e01f93b1550a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              alt=""
            />
            <div className="rank">02</div>
          </div>
          <div className="project-card-info">
            <div className="title">Birthday Reminder</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </div>
            <div className="info-links">
              <a href=" ">Learn More</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-image">
            <img
              src={
                "https://images.unsplash.com/photo-1654124803462-e01f93b1550a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              alt=""
            />
            <div className="rank">03</div>
          </div>
          <div className="project-card-info">
            <div className="title">Birthday Reminder</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </div>
            <div className="info-links">
              <a href=" ">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
