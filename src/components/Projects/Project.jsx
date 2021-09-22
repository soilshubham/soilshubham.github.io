import React from 'react'
import './Project.scss'
import { Button, Grid, Typography } from "@material-ui/core";
import UiUxDevIcon from '../../assets/icons/uiux.png'

export const Project = () => {
    return (
        <div className="project-sec">
            <div className="title">
                <h3>Some of my recent works</h3>
                <h1>Projects</h1>
            </div>
            <div className="projects">
                <Grid container >
                    <Grid md={4} sm={12} item className="grid-item">
                        <div className="card">
                            <img src={UiUxDevIcon} alt="ui-ux" />
                            <div className="title">Project 1</div>
                            <div className="desc">I do ui/ux design for the website that helps website to get a unique look.</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
