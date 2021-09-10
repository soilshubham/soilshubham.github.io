import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CoverImage from '../../assets/images/cover04.png'
import "./Hero.scss";

export const Hero = () => {
  return (
    <header>
      <Grid container className="hero-section-grid">
        <Grid item md={7} className="title">
          <div>
            <div className="title-1">👋 Hello There, I'm</div>
            <div className="title-2">Sahil Shubham,</div>
            <div className="title-3">A designer and a full stack developer,</div>
            <div className="title-4"><LocationOnOutlinedIcon style={{paddingTop: "0.6rem"}}/>Based in Chhattisgarh, India.</div>
            <div className="call-to-action">
              <Button className="btn" variant="contained" color="primary" disableElevation>Let's Talk</Button>
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
