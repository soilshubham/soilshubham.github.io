import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="content">
        <div className="top">
          <div className="brand">sahil</div>
          <div className="links">
            <a
              href="https://github.com/soilshubham"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://linkedin.com/in/soilshubham/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/froznxd"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="bot">
          <div className="sidenote">
            Developed by{" "}
            <a
              href="https://github.com/soilshubham"
              target="_blank"
              rel="noreferrer"
            >
              Sahil Shubham
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
