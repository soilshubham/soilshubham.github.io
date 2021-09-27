import React, { useState } from "react";
import { Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.scss";

export const Navbar = () => {
    const [navBarToggle, setNavBarToggle] = useState(false);

    return (
        <>
            <nav>
                {navBarToggle ? (
                    <div
                        className="overlay"
                        onClick={() => {
                            setNavBarToggle(false);
                        }}
                    ></div>
                ) : null}
                <div className="nav-logo">sahil~</div>
                <ul className={`nav-links ${navBarToggle ? "active" : ""}`}>
                    <li>
                        <a href="#home"
                            onClick={() => {
                                setNavBarToggle(false);
                            }}
                        >Home</a>
                    </li>
                    <li>
                        <a href="#about"
                            onClick={() => {
                                setNavBarToggle(false);
                            }}
                        >About</a>
                    </li>
                    <li>
                        <a href="#project"
                            onClick={() => {
                                setNavBarToggle(false);
                            }}
                        >Projects</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/messages/compose?recipient_id=763040225551536128&text=Hi%20Sahil,"
                            onClick={() => {
                                setNavBarToggle(false);
                            }}
                        >
                            <Button className="btn" variant="contained" color="primary" disableElevation>Let's Talk</Button>
                        </a>
                    </li>
                </ul>
                <MenuIcon
                    className="nav-toggle-icon"
                    onClick={() => {
                        setNavBarToggle(!navBarToggle);
                    }}
                />
            </nav>
        </>
    );
};
