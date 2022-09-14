import React from 'react'
import Icon from '@mdi/react'
import { mdiChevronLeft } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';
import "../styles/Projects.css"

const Projects = ( { darkMode, projectRef }) => {

  return (
    <section style={{ backgroundColor: darkMode? "#1b1b1b" : "rgb(233, 233, 233)", color: darkMode? "white" : "black" }} ref={projectRef} className="projects">
        <h1>Projects</h1>
        <span></span>
        <p className="bio-caption">Some of the projects I've built. Scroll each image to see more.</p>
        <div className="project-container">
          <div className="project-left">
            <img src={require(`../files/click.jpg`)} alt="click-app"></img>
            <img src={require(`../files/click-1.jpg`)} alt="click-app"></img>
            <img src={require(`../files/click-2.jpg`)} alt="click-app"></img>
            <img src={require(`../files/click-3.jpg`)} alt="click-app"></img>
            <div className='overlay'>
                <Icon path={mdiChevronLeft}
                color="white"
                className='bounce-left'
                size={1}
                />
              <p>Scroll</p>
              <Icon path={mdiChevronRight}
                className='bounce-right'
                color="white"
                size={1}
                />
            </div>
          </div>
          <div className="project-right">
            <h2>Click</h2>
            <p className='tech-stack'>HTML / CSS / JavaScript / React / Firebase</p>
            <p className='project-description'>Click is an instant messaging application where users can register and sign in, send text and images to other users, and customize their profile.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/click/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/click" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <img src={require(`../files/youclone.jpeg`)} alt="youclone-app"></img>
            <img src={require(`../files/youclone-1.jpg`)} alt="youclone-app"></img>
            <img src={require(`../files/youclone-2.jpg`)} alt="youclone-app"></img>
            <img src={require(`../files/youclone-3.jpg`)} alt="youclone-app"></img>
            <div className='overlay'>
                <Icon path={mdiChevronLeft}
                color="white"
                className='bounce-left'
                size={1}
                />
              <p>Scroll</p>
              <Icon path={mdiChevronRight}
                className='bounce-right'
                color="white"
                size={1}
                />
            </div>
          </div>
          <div className="project-right">
            <h2>YouClone</h2>
            <p className='tech-stack'>HTML / CSS / JavaScript / React / MaterialUI / RapidAPI</p>
            <p className='project-description'>YouClone is a replica of YouTube. Users can browse their favourite videos and channels by category or manual search and watch their favourite content on any device.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/youclone/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/youclone" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <img src={require(`../files/the-range.jpg`)} alt="the-range-app"></img>
            <img src={require(`../files/the-range-1.jpg`)} alt="the-range-app"></img>
            <img src={require(`../files/the-range-2.jpg`)} alt="the-range-app"></img>
            <img src={require(`../files/the-range-3.jpg`)} alt="the-range-app"></img>
            <div className='overlay'>
                <Icon path={mdiChevronLeft}
                color="white"
                className='bounce-left'
                size={1}
                />
              <p>Scroll</p>
              <Icon path={mdiChevronRight}
                className='bounce-right'
                color="white"
                size={1}
                />
            </div>
          </div>
          <div className="project-right">
            <h2>The Range</h2>
            <p className='tech-stack'>HTML / CSS / JavaScript / React </p>
            <p className='project-description'>The Range is a shopping cart application for golfing equipment. Users can browse a selection of products by category or manual search and add/view/edit items in their cart.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/the-range/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/the-range" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <img src={require(`../files/omicron.jpeg`)} alt="omicron-app"></img>
            <img src={require(`../files/omicron-1.jpg`)} alt="omicron-app"></img>
            <img src={require(`../files/omicron-2.jpg`)} alt="omicron-app"></img>
            <img src={require(`../files/omicron-3.jpg`)} alt="omicron-app"></img>
            <div className='overlay'>
                <Icon path={mdiChevronLeft}
                color="white"
                className='bounce-left'
                size={1}
                />
              <p>Scroll</p>
              <Icon path={mdiChevronRight}
                className='bounce-right'
                color="white"
                size={1}
                />
            </div>
          </div>
          <div className="project-right">
            <h2>Omicron</h2>
            <p className='tech-stack'>HTML / CSS / JavaScript / React </p>
            <p className='project-description'>Omicron is a replica of a homepage of a local business website.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/omicron/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/omicron" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects