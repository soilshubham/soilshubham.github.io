import { Grid } from '@material-ui/core'
import React, { useState } from 'react'

import "./About.scss"

import PersonalPhoto from '../../assets/images/cover-new.png'

export const About = () => {

    const [skills, setSkils] = useState([
        "C/C++",
        "Python",
        "HTML",
        "CSS",
        "Javascript",
        "SASS",
        "NodeJS",
        "ReactJs",
        "Redux",
        "ExpressJS",
        "MongoDB",
        "Material UI",
        "Bootstrap",
        "Git",
        "REST API",
        "Unity3D",
        "Figma",
        "Photoshop",
        "Illustrator",
    ])

    return (
        <>
            <Grid container className="about-section">
                <div className="bg-box"></div>
                <Grid item sm={4} className="left-section">
                    <img src={PersonalPhoto} alt="sahil" className="personal-photo" />
                </Grid>
                <Grid item sm={8} className="right-section">
                    <div className="title">About Me</div>
                    <p>
                        Design-minded web developer, skilled in MERN stack.
                        Also interested in Game development, Augmented &
                        Virtual Realities, UI/UX and Graphic designing.
                        Pursuing B.Tech Degree in Computer Science and
                        Engineering at SRM University, India.<br /><br />
                    </p>
                    <p className="skills-section">
                        {
                            skills.map(item => {
                                return <span>{item}</span>
                            })
                        }
                    </p>
                </Grid>
            </Grid>
        </>
    )
}