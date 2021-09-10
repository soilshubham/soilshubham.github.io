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
                            setNavBarToggle(!navBarToggle);
                        }}
                    ></div>
                ) : null}
                <div className="nav-logo">sahil~</div>
                <ul className={`nav-links ${navBarToggle ? "active" : ""}`}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <Button className="btn" variant="contained" color="primary" disableElevation>Let's Talk</Button>
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
