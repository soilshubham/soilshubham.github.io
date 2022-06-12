import {
  FaReact as ReactIcon,
  FaNodeJs as NodeIcon,
  FaFigma as FigmaIcon,
  FaGitAlt as GitIcon,
} from "react-icons/fa";
import {
  DiJavascript1 as JSIcon,
  DiCss3 as CSSIcon,
  DiSass as SassIcon,
} from "react-icons/di";
import {
  SiExpress as ExpressIcon,
  SiMongodb as MongoDBIcon,
  SiTailwindcss as TailwindIcon,
  SiUnity as UnityIcon,
  SiPython as PythonIcon,
  SiNextdotjs as NextIcon,
  SiAdobephotoshop as PSIcon,
  SiAdobeillustrator as AIcon,
} from "react-icons/si";
import Title from "../common/Title";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <Title title="Skills" />
      <div className="skills-container">
        <div className="skill">
          <ReactIcon />
          <div className="title">React</div>
        </div>
        <div className="skill">
          <NextIcon />
          <div className="title">Next.js</div>
        </div>
        <div className="skill">
          <JSIcon />
          <div className="title">JavaScript</div>
        </div>
        <div className="skill">
          <NodeIcon />
          <div className="title">Node.js</div>
        </div>
        <div className="skill">
          <ExpressIcon />
          <div className="title">Express</div>
        </div>
        <div className="skill">
          <PythonIcon />
          <div className="title">Python</div>
        </div>
        <div className="skill">
          <MongoDBIcon />
          <div className="title">MongoDB</div>
        </div>
        <div className="skill">
          <SassIcon />
          <div className="title">Sass</div>
        </div>
        <div className="skill">
          <UnityIcon />
          <div className="title">Unity3D</div>
        </div>
        <div className="skill">
          <TailwindIcon />
          <div className="title">TailwindCSS</div>
        </div>
        <div className="skill">
          <CSSIcon />

          <div className="title">CSS</div>
        </div>
        <div className="skill">
          <FigmaIcon />
          <div className="title">Figma</div>
        </div>
        {/* <div className="skill">
          <GitIcon />
          <div className="title">Git</div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
