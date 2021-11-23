import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import CoverImage from '../../assets/images/cover04.png'
import CodeBlocks from "./CodeBlocks/CodeBlocks"
import "./Hero.scss";

export const Hero = () => {
  return (
    <header id="home">
      <Grid container className="hero-section-grid">
        <Grid item md={6} className="title">
          <div>
            <div className="title-1">Hello There, I'm</div>
            <div className="title-2">Sahil Shubham</div>
            <div className="title-3">designer / fullstack developer</div>
            <div className="call-to-action">
              <a target="_blank" href="https://drive.google.com/file/d/1q6m7sBqAZWXxQJdS6bRFLFVJAbEZVKeR/view">
                <Button className="btn" variant="contained" disableElevation>Resume</Button>
              </a>
              {/* <a target="_blank" href="https://twitter.com/messages/compose?recipient_id=763040225551536128&text=Hi%20Sahil,">
                <Button className="btn" variant="contained" color="primary" disableElevation>Let's Talk</Button>
              </a> */}
            </div>
            <div className="socials">
              <a href="https://github.com/soilshubham">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/soilshubham/">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/soilshubham">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </Grid>
        <Grid item md={6} className="code-block-container">
          {/* <img src={CoverImage}></img> */}
          <CodeBlocks />
        </Grid>
      </Grid>
    </header>
  );
};
