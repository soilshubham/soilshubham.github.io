import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CoverImage from '../../assets/images/cover02.png'
import "./Hero.scss";

export const Hero = () => {
  return (
    <header>
      <Grid container className="hero-section-grid">
        <Grid item md={7} className="title">
          <div>
            <div className="title-1">👋 Hello There, I'm</div>
            <div className="title-2">Sahil Shubham,</div>
            <div className="title-3">A design minded full stack developer,</div>
            <div className="title-4">based in Chhattisgarh, India.</div>
          </div>
        </Grid>
        <Grid item md={5} className="image">
          <img src={CoverImage}></img>
        </Grid>
      </Grid>
    </header>
  );
};
