import React from 'react'
import './Project.scss'
import { Button, Grid, Typography } from "@material-ui/core";
import projectimage from '../../assets/projects/website.jpg'
import ProjectData from '../../data/projects.json'

import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Project = () => {
    return (
        <div className="project-sec" id="project">
            <div className="pg-title">
                <h3>Stuff I’ve Worked On</h3>
                <h1>Projects</h1>
            </div>
            <div className="projects">
                <Grid container >
                    {
                        ProjectData.map((project, key) => {
                            return (
                                <Grid md={4} sm={12} item className="grid-item" key={key} >
                                    <div className="card">

                                        <div className="card-body">
                                            <div className="actions">
                                                {
                                                    project.links.map((link, idx) => {
                                                        switch (link.type) {
                                                            case "demo":
                                                                return (
                                                                    <a href={link.link} target="_blank">
                                                                        <LaunchRoundedIcon className="icons" />
                                                                    </a>
                                                                );
                                                                break;
                                                            case "github":
                                                                return (
                                                                    <a href={link.link} target="_blank">
                                                                        <GitHubIcon className="icons" />
                                                                    </a>
                                                                );
                                                                break;

                                                            default:
                                                                break;
                                                        }
                                                    })
                                                }
                                            </div>
                                            <div className="content-group">
                                                <div className="title">{project.name}</div>
                                                <div className="keywords">{project.keywords}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}
