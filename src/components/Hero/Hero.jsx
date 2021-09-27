import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CoverImage from '../../assets/images/cover04.png'
import "./Hero.scss";

export const Hero = () => {
  return (
    <header id="home">
      <Grid container className="hero-section-grid">
        <Grid item md={7} className="title">
          <div>
            <div className="title-1">👋 Hello There, I'm</div>
            <div className="title-2">Sahil Shubham,</div>
            <div className="title-3">A designer and a full stack developer,</div>
            <div className="title-4"><LocationOnOutlinedIcon style={{ paddingTop: "0.6rem" }} />Based in Chhattisgarh, India.</div>
            <div className="call-to-action">
              <a target="_blank" href="https://drive.google.com/file/d/1q6m7sBqAZWXxQJdS6bRFLFVJAbEZVKeR/view">
                <Button className="btn-2" variant="contained" color="primary" disableElevation>Resume</Button>
              </a>
              <a target="_blank" href="https://twitter.com/messages/compose?recipient_id=763040225551536128&text=Hi%20Sahil,">
                <Button className="btn" variant="contained" color="primary" disableElevation>Let's Talk</Button>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item md={5} className="image">
          <img src={CoverImage}></img>
        </Grid>
      </Grid>
    </header>
  );
};
