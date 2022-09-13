import React from 'react'
import "../styles/Title.css"
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

const Title = ({ darkMode, projectRef, titleRef }) => {
    const scroll = () => {
        projectRef.current?.scrollIntoView();
    }


  return (
    <section ref={titleRef} style={{ backgroundColor: darkMode? "rgb(27, 27, 27)" : "rgb(233, 233, 233)", color: darkMode? "white" : "black" }} className="title-page">
        <h1>Hi, I'm <span>Ben.</span></h1>
        <div>I'm a frontend developer.</div>
        <button onClick={scroll} className="see-projects">Projects</button>
        <aside style={{ backgroundColor: "transparent", color: darkMode? "white" : "black" }} className="side-links">
            <a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
                <Icon path={mdiLinkedin}
                className="link-icon"
                title="LinkedIn Profile"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
            <a href="https://github.com/tenbucker4" target="_blank" rel='noreferrer'>
                <Icon path={mdiGithub}
                className="link-icon"
                title="GitHub Profile"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
        </aside>
    </section>
  )
}

export default Title
