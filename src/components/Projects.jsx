import React from 'react'
import "../styles/Projects.css"

const Projects = () => {
  return (
    <section className="projects">
        <h1>Projects</h1>
        <span></span>
        <p className="bio-caption">Some of the projects I've built</p>
        <div className="project-container">
          <div className="project-left">
            <img src={require(`../files/the-range.jpg`)}></img>
          </div>
          <div className="project-right">
            <h2>The Range</h2>
            <p>The Range is a shopping cart application built in React. Users can browse
               products by category or manual search, add them to their cart, and view/edit their cart.</p>
            <button>Details</button>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <img src={require(`../files/omicron.jpeg`)}></img>
          </div>
          <div className="project-right">
            <h2>Omicron</h2>
            <p>Omicron is a replica of a homepage of a local business website built in React.</p>
            <button>Details</button>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <img src={require(`../files/employable.jpg`)}></img>
          </div>
          <div className="project-right">
            <h2>Employable</h2>
            <p>Employable is a custom resume builder built with React.</p>
            <button>Details</button>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <img style={{ filter: "blur(2px)"}} src={require(`../files/trek.jpg`)}></img>
          </div>
          <div className="project-right">
            <h2>Trek (Coming Soon)</h2>
            <p>Trek is an upcoming full stack social media site built with MongoDB, Express, React and NodeJS.</p>
            <button>Details</button>
          </div>
        </div>
    </section>
  )
}

export default Projects