import React from 'react'
import './Project.scss'
import { Button, Grid, Typography } from "@material-ui/core";
import projectimage from '../../assets/projects/website.jpg'
import ProjectData from '../../data/projects.json'

export const Project = () => {
    return (
        <div className="project-sec" id="project">
            <div className="title">
                <h3>Some of my recent works</h3>
                <h1>Projects</h1>
            </div>
            <div className="projects">
                <Grid container >
                    {
                        ProjectData.map((project, key) => {
                            return (
                                <Grid md={4} sm={12} item className="grid-item" key={key}>
                                    <div className="card">
                                        <div className="image">
                                            <img src={require(`../../assets/projects/${project.image}.png`).default} alt="ui-ux" />
                                        </div>
                                        <div className="card-body">
                                            <div className="title">{project.name}</div>
                                            <div className="desc">{project.desc}</div>
                                            <div className="buttons">
                                                <a target="_blank" href={project.codeLink}>
                                                    <Button variant="contained" color="primary" disableElevation className="btn-1">View Code</Button>
                                                </a>
                                                <a target="_blank" href={project.demoLink}>
                                                    <Button variant="contained" color="primary" disableElevation className="btn-2">Live Demo</Button>
                                                </a>
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
