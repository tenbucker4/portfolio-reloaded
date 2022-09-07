import React from 'react'
import "../styles/Title.css"
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiFileAccount } from '@mdi/js';

const Title = ({ darkMode, projectRef, titleRef }) => {
    const scroll = () => {
        projectRef.current?.scrollIntoView();
    }


  return (
    <section ref={titleRef} style={{ backgroundColor: darkMode? "rgb(27, 27, 27)" : "rgb(233, 233, 233)", color: darkMode? "white" : "black" }} className="title-page">
        <h1>Hi, I'm <span>Ben.</span></h1>
        <h3>I'm a frontend software developer.</h3>
        <button onClick={scroll} className="see-projects">Projects</button>
        <aside className="side-links" style={{ backgroundColor: darkMode? "black" : "white" }}>
            <a href="https://github.com/tenbucker4" target="_blank" rel='noreferrer'>
                <Icon path={mdiLinkedin}
                className="link-icon"
                title="LinkedIn Profile"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
            <a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
                <Icon path={mdiGithub}
                className="link-icon"
                title="GitHub Profile"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
            <a href="../files/Ben-Tucker-Resume.pdf" target="_blank" rel='noreferrer' download>
                <Icon path={mdiFileAccount}
                className="link-icon"
                title="Resume"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
        </aside>
    </section>
  )
}

export default Title