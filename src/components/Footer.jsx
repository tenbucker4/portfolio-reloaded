import React from 'react'
import "../styles/Footer.css"
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiFileAccount } from '@mdi/js';

const Footer = ( { darkMode }) => {
  return (
    <footer>
        <div className="copyright">@Ben Tucker 2022</div>
        <div className="footer-links">
            <a href="https://github.com/tenbucker4" target="_blank" rel='noreferrer'>
                <Icon path={mdiLinkedin}
                className="footer-icon"
                title="LinkedIn Profile"
                color="black"
                />
            </a>
            <a href="https://www.linkedin.com/in/ben-tucker-6a520911a/" target="_blank" rel='noreferrer'>
                <Icon path={mdiGithub}
                className="footer-icon"
                title="GitHub Profile"
                color="black"
                />
            </a>
            <a href="../files/Ben-Tucker-Resume.pdf" target="_blank" rel='noreferrer' download>
                <Icon path={mdiFileAccount}
                className="footer-icon"
                title="Resume"
                color="black"
                />
            </a>
        </div>
    </footer>
  )
}

export default Footer