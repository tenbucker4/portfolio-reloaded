import React from 'react'
import "../styles/Nav.css"
import Icon from '@mdi/react'
import { mdiBrightness6 } from '@mdi/js';

const Nav = ( { darkMode, setDarkMode }) => {
  const toggle = () => {
    setDarkMode(current => !current)
  }
  

  return (
    <header style={{ backgroundColor: darkMode? "black" : "white", color: darkMode? "white" : "black" }}>
        <div className="header-title">Ben Tucker</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
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