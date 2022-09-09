import React from 'react'
import "../styles/Footer.css"
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

const Footer = ( { darkMode }) => {
  return (
    <footer style={{ backgroundColor: darkMode? "#1b1b1b" : "rgb(233, 233, 233)", color: darkMode? "white" : "black" }}>
        <div className="copyright">@Ben Tucker 2022</div>
        <div className="footer-links">
            <a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
                <Icon path={mdiLinkedin}
                className="footer-icon"
                title="LinkedIn Profile"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
            <a href="https://github.com/tenbucker4" target="_blank" rel='noreferrer'>
                <Icon path={mdiGithub}
                className="footer-icon"
                title="GitHub Profile"
                color={darkMode ? ("white") : ("black")}
                />
            </a>
        </div>
    </footer>
  )
}

export default Footer