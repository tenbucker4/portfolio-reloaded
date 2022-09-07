import React from 'react'
import "../styles/Nav.css"

const Nav = () => {
  return (
    <header>
        <div className="header-title">Ben Tucker</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </header>
  )
}

export default Nav