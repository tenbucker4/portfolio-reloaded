import React from 'react'
import "../styles/Nav.css"
import Icon from '@mdi/react'
import { mdiBrightness6 } from '@mdi/js';

const Nav = ( { darkMode, setDarkMode, projectRef, bioRef, contactRef }) => {
  const toggle = () => {
    setDarkMode(current => !current)
  }
  
  const scroll = (section) => {
    section.current?.scrollIntoView();
  }

  return (
    <header style={{ backgroundColor: darkMode? "black" : "white", color: darkMode? "white" : "black" }}>
        <div className="header-title">Ben Tucker</div>
        <ul>
            <li id="homeRef" onClick={() => window.scrollTo(0, 0)}>Home</li>
            <li id="bioRef" onClick={() => scroll(bioRef)}>About</li>
            <li id="projectRef" onClick={() => scroll(projectRef)}>Projects</li>
            <li id="contactRef" onClick={() => scroll(contactRef)}>Contact</li>
        </ul>
        <Icon path={mdiBrightness6}
              className="dark-mode-icon"
              title="Dark Mode"
              color={darkMode ? ("white") : ("black")}
              onClick={toggle}
        />
    </header>
  )
}

export default Nav