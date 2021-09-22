import React, { Component } from 'react'
import './About.scss'

import { Button, Grid, Typography } from "@material-ui/core";
import WebDevIcon from '../../assets/icons/webdev_white.png'
import AppDevIcon from '../../assets/icons/appdev.png'
import UiUxDevIcon from '../../assets/icons/uiux.png'

export class About extends Component {
    render() {
        return (
            <div className="about-sec">
                <div className="title">
                    <h3>What I will do for you</h3>
                    <h1>Services</h1>
                </div>
                <div className="services">
                    <Grid container >
                        <Grid md={4} sm={12} item className="grid-item">
                            <div className="card">
                                <img src={UiUxDevIcon} alt="ui-ux" />
                                <div className="title">Web Design</div>
                                <div className="desc">I do ui/ux design for the website that helps website to get a unique look.</div>
                            </div>
                        </Grid>
                        <Grid md={4} sm={12} item className="grid-item">
                            <div className="card center">
                                <img src={WebDevIcon} alt="web-dev" />
                                <div className="title">Web Development</div>
                                <div className="desc">I create high performance website with blazing fast speed.</div>
                            </div>
                        </Grid>
                        <Grid md={4} sm={12} item className="grid-item">
                            <div className="card">
                                <img src={AppDevIcon} alt="app-dev" />
                                <div className="title">App Development</div>
                                <div className="desc">I can develop mobiles apps with eye catching clean UI.</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default About
