import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="content">
        <div className="group">
          <div className="brand">sahil</div>
          <a href="" className="email">
            soilshubham@gmail.com
          </a>
        </div>
        <div className="group links">
          <div className="group-header">Follow me</div>
          <div className="group-content">
            <a
              href="https://twitter.com/froznxd"
              target="_blank"
              className="follow-link"
            >
              twitter
            </a>
            <a
              href="https://github.com/soilshubham"
              target="_blank"
              className="follow-link"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/soilshubham/"
              className="follow-link"
              target="_blank"
            >
              linkedin
            </a>
            <a
              href="https://froznpoop.portfoliobox.net"
              target="_blank"
              className="follow-link"
            >
              gfx design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
