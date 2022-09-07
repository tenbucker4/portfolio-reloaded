import React from 'react'
import "../styles/Bio.css"
import Icon from '@mdi/react'
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiReact, mdiMaterialUi, mdiGit } from '@mdi/js';

const Bio = () => {
  return (
    <section className="bio-container">
        <h1>About Me</h1>
        <span></span>
        <p>Me and my skillset</p>
        <div className="bio-content">
            <div className="about-me-content">
                <h3>A bit more about me</h3>
                <p>I'm a <b>frontend software developer</b> with a passion for solving meaningful, complex problems.
                     Since discovering web development, I've become fascinated with the combination of logic,
                      creativity, and constant new technologies that promote a mentality of lifelong learning.
                       When I'm away from my computer, I love playing basketball, golf, video games, and spending time with family and friends.</p>
            </div>
            <div className="skills-content">
                <h3>My skills</h3>
                <div className="skills">
                    <div className="skill-entry">
                        <Icon path={mdiLanguageHtml5}
                        className="skill-icon"
                        color="red"
                        />
                        <div>HTML</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bio