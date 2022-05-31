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
        <ReactIcon size={30} />
        <NextIcon size={30} />
        <JSIcon size={30} />
        <NodeIcon size={30} />
        <AIcon size={30} />
        <ExpressIcon size={30} />
        <PythonIcon size={30} />
        <MongoDBIcon size={30} />
        <SassIcon size={30} />
        <PSIcon size={30} />
        <TailwindIcon size={30} />
        <UnityIcon size={30} />
        <CSSIcon size={30} />
        <FigmaIcon size={30} />
        <GitIcon size={30} />
      </div>
    </div>
  );
};

export default Skills;
