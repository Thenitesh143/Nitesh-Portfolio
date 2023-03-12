import React from 'react'
import './Skills.css'

import html from '../../Assets/skillslogo/html.png'
import css from '../../Assets/skillslogo/css.png'
import javascript from '../../Assets/skillslogo/javascript.png'
import git from '../../Assets/skillslogo/git.png'
import bootstrap from '../../Assets/skillslogo/bootstrap.png'
import tailwind from '../../Assets/skillslogo/tailwindcss.png'
import materialui from '../../Assets/skillslogo/materialui.png'
import react from '../../Assets/skillslogo/react.png'
import java from '../../Assets/skillslogo/java.png'



const Skills = () => {
    return (
        <div className='skills'>
            <div>
                <h1>My Skills</h1>
            </div>
            <div className="skills-container">
                <div className="skills-name">
                    <h3>HTML 5</h3>
                    <img src={html} alt="" />
                </div>
                <div className="skills-name">
                    <h3>CSS 3</h3>
                    <img src={css} alt="" />
                </div>
                <div className="skills-name">
                    <h3>Javascript</h3>
                    <img src={javascript} alt="" />
                </div>
                <div className="skills-name">
                    <h3>Bootstrap</h3>
                    <img src={bootstrap} alt="" />
                </div>
                <div className="skills-name">
                    <h3>Tailwind CSS</h3>
                    <img src={tailwind} alt="" />
                </div>
                <div className="skills-name">
                    <h3>Material UI</h3>
                    <img src={materialui} alt="" />
                </div>
                <div className="skills-name">
                    <h3>React</h3>
                    <img src={react} alt="" />
                </div>
                <div className="skills-name">
                    <h3>Java</h3>
                    <img src={java} alt="" />
                </div>
                <div className="skills-name">
                    <h3>Git</h3>
                    <img src={git} alt="" />
                </div>
            </div>
        </div>
    )
}



export default Skills
