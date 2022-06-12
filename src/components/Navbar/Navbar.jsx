import "./Navbar.css";
import {
  FaTwitter as Twitter,
  FaGithub as Git,
  FaLinkedin as LinkedIn,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <div className="nav-wrapper">
          <ul id="" className="">
            <li>
              <a href="" className="brand">
                sahil
              </a>
            </li>
            {/* <li>
              <a href="" style={{ fontWeight: "600" }}>
                Home
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li> */}
            <li className="right">
              <div className="social-wrapper">
                <div className="navlink">About</div>
                <div className="navlink">Projects</div>
                <div className="navlink">Contact</div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
