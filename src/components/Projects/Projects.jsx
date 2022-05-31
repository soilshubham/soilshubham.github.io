import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-wrapper">
        <div className="project-card card-1">
          <div className="title">Birthday Reminder</div>
        </div>
        <div className="project-card card-2">
          <div className="title">Splitto</div>
        </div>
        <div className="project-card">
          <div className="title">Sudoku Solver</div>
        </div>
        <div className="project-card card-4">
          <div className="title">Running Late</div>
        </div>
        <div className="project-card">
          <div className="title">VR Trivia Game</div>
        </div>
        <div className="project-card">
          <div className="title">DigiBros Website</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
