import React from 'react'
import "../styles/Title.css"
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import { mdiFileAccount } from '@mdi/js';
import resume from "../files/Ben-Tucker-Resume.pdf";

const Title = ({ darkMode, projectRef, titleRef, bioRef }) => {
    const scroll = () => {
        projectRef.current?.scrollIntoView();
    }

    const scrollToBio = () => {
        bioRef.current?.scrollIntoView();
    }


  return (
    <section ref={titleRef} style={{ backgroundColor: darkMode? "rgb(27, 27, 27)" : "rgb(233, 233, 233)", color: darkMode? "white" : "black" }} className="title-page">
        <h1>Hi, I'm <span>Ben.</span></h1>
        <div style={{ fontSize: "18px" }}>I'm a frontend developer.</div>
        <button onClick={scroll} className="see-projects">Projects</button>
        <aside style={{ backgroundColor: "transparent", color: darkMode? "white" : "black" }} className="side-links">
            <a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
                <Icon path={mdiLinkedin}
                className="link-icon"
                title="LinkedIn Profile"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
            <a href={resume} download>
                <Icon path={mdiFileAccount}
                className="link-icon"
                title="Resume"
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
        <div className='scroll-icon' onClick={scrollToBio}>
            <Icon path={mdiChevronDown}
            size={1.5}
            className="scroll-down"
            color={darkMode ? ("white") : ("black")}
            />
        </div>
    </section>
  )
}

export default Title
