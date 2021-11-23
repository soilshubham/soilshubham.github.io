import React from 'react'
import { CodeBlock, atomOneLight } from 'react-code-blocks'
import "./CodeBlocks.scss"

const CodeBlocks = () => {
    const code = `
    class Person {
        constructor() {
            this.name = "Anurag Hazra";
            this.traits = ["DESIGN", "DEV"];
            this.age = new Date().getFullYear() - 2001;
        }
    }
    `
    return (
        <div className="code-block">
            <div className="red-dot"></div>
            <div className="green-dot"></div>
            <div>class <strong>Developer</strong> &#123;</div>
            <div>&emsp;constructor () &#123;</div>
            <div>&emsp;&emsp;this.name = "<strong>Sahil Shubham</strong>"</div>
            <div>&emsp;&emsp;this.skills = [ "<strong>Frontend</strong>", "<strong>Backend</strong>" ]</div>
            <div>&emsp;&emsp;this.age = new Date().getFullYear() - 2000</div>
            <div>&emsp;&#125;</div>
            <div>&#125;</div>
        </div>
    )
}

export default CodeBlocks

