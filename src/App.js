import React, { Component } from 'react'
import { Navbar, Hero, About, Project } from './components';
import './App.scss'
export default class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Hero />
                <About />
                <Project />
            </>
        )
    }
}