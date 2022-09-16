import React, { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiFirebase } from '@mdi/js';
import { mdiSass } from '@mdi/js';
import { mdiMaterialUi } from '@mdi/js';
import "../styles/Projects.css"

const Projects = ( { darkMode, projectRef }) => {
    // const [projectIndex, setProjectIndex] = useState(0);

  return (
    <section style={{ backgroundColor: darkMode? "#1b1b1b" : "rgb(233, 233, 233)", color: darkMode? "white" : "black" }} ref={projectRef} className="projects">
        <h1>Projects</h1>
        <span></span>
        <p className="bio-caption">Some of the projects I've built. Scroll each image to see more.</p>
        <div className="project-container">
            <div className="project-left">
              <div className='slider'>
                <img src={require(`../files/click.jpg`)} alt="click-app"></img>
                <img src={require(`../files/click-1.jpg`)} alt="click-app"></img>
                <img src={require(`../files/click-2.jpg`)} alt="click-app"></img>
                <img src={require(`../files/click-3.jpg`)} alt="click-app"></img>
              </div>
            </div>
          <div className="project-right">
            <h2>Click</h2>
            <div className='tech-stack'>
                <Icon path={mdiLanguageHtml5}
                color="rgb(255, 68, 0)"
                size={1.75}
                />
                <Icon path={mdiLanguageCss3}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
                <Icon path={mdiLanguageJavascript}
                color="yellow"
                size={1.75}
                />
                <Icon path={mdiReact}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
                <Icon path={mdiFirebase}
                color="orange"
                size={1.75}
                />
            </div>
            <p className='project-description'>Click is an instant messaging application where users can register and sign in, send text and images to other users, and customize their profile.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/click/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/click" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <div className='slider'>
                <img src={require(`../files/youclone.jpeg`)} alt="youclone-app"></img>
                <img src={require(`../files/youclone-1.jpg`)} alt="youclone-app"></img>
                <img src={require(`../files/youclone-2.jpg`)} alt="youclone-app"></img>
                <img src={require(`../files/youclone-3.jpg`)} alt="youclone-app"></img>
            </div>
          </div>
          <div className="project-right">
            <h2>YouClone</h2>
            <div className='tech-stack'>
              <Icon path={mdiLanguageHtml5}
                color="rgb(255, 68, 0)"
                size={1.75}
                />
                <Icon path={mdiLanguageCss3}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
                <Icon path={mdiLanguageJavascript}
                color="yellow"
                size={1.75}
                />
                <Icon path={mdiReact}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
                <Icon path={mdiMaterialUi}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
            </div>
            <p className='project-description'>YouClone is a replica of YouTube. Users can browse their favourite videos and channels by category or manual search and watch their favourite content on any device.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/youclone/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/youclone" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
            <div className='slider'>
                <img src={require(`../files/the-range.jpg`)} alt="the-range-app"></img>
                <img src={require(`../files/the-range-1.jpg`)} alt="the-range-app"></img>
                <img src={require(`../files/the-range-2.jpg`)} alt="the-range-app"></img>
                <img src={require(`../files/the-range-3.jpg`)} alt="the-range-app"></img>
            </div>
          </div>
          <div className="project-right">
            <h2>The Range</h2>
            <div className='tech-stack'>
              <Icon path={mdiLanguageHtml5}
                color="rgb(255, 68, 0)"
                size={1.75}
                />
                <Icon path={mdiLanguageCss3}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
                <Icon path={mdiLanguageJavascript}
                color="yellow"
                size={1.75}
                />
                <Icon path={mdiReact}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
            </div>
            <p className='project-description'>The Range is a shopping cart application for golfing equipment. Users can browse a selection of products by category or manual search and add/view/edit items in their cart.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/the-range/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/the-range" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-left">
          <div className='slider'>
                <img src={require(`../files/ether-1.png`)} alt="ether-app"></img>
                <img src={require(`../files/ether-2.png`)} alt="ether-app"></img>
                <img src={require(`../files/ether-3.png`)} alt="ether-app"></img>
                <img src={require(`../files/ether-4.png`)} alt="ether-app"></img>
            </div>
          </div>
          <div className="project-right">
            <h2>Ether</h2>
            <div className='tech-stack'>
                <Icon path={mdiLanguageHtml5}
                color="rgb(255, 68, 0)"
                size={1.75}
                />
                <Icon path={mdiLanguageCss3}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
                <Icon path={mdiLanguageJavascript}
                color="yellow"
                size={1.75}
                />
                <Icon path={mdiReact}
                color="rgb(28, 136, 237)"
                size={1.75}
                />
                <Icon path={mdiSass}
                color="rgb(244, 118, 185)"
                size={1.75}
                />
            </div>
            <p className='project-description'>Ether is an informative space app where users can learn more about the planets in our solar system.</p>
            <div className="project-buttons">
              <a href="https://tenbucker4.github.io/ether/" target="_blank" rel="noreferrer"><button className="live-site">Live Site</button></a>
              <a href="https://github.com/tenbucker4/ether" target="_blank" rel="noreferrer"><button className="see-code">See Code</button></a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects