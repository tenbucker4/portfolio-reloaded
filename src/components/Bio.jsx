import React from 'react'
import "../styles/Bio.css"
import resume from "../files/Ben-Tucker-Resume.pdf";


const Bio = ({ darkMode, bioRef, contactRef }) => {
    const scroll = (section) => {
        section.current?.scrollIntoView();
      }

  return (
    <section ref={bioRef} style={{ backgroundColor: darkMode? "black" : "white", color: darkMode? "white" : "black" }} className="about-me">
        <h1>About Me</h1>
        <span></span>
        <p className="bio-caption">Me and my skillset.</p>
        <div className="bio-content">
            <div className="about-me-content">
                <h3>A bit more about me</h3>
                <br></br>
                <p style={{ color: darkMode? "white" : "#555555" }}>I'm a <b>frontend developer</b> and <b>chemist</b> with a passion for solving real-world, complex problems and building products that are intuitive and visually-appealing.
                     Since discovering web development, I've become fascinated with the combination of logic,
                      creativity, and constant new technologies that promote a mentality of <b>lifelong learning</b>.
                       When I'm away from my computer, I love playing basketball, golf, video games, and spending time with family and friends.</p>
                <br></br>
                <p style={{ color: darkMode? "white" : "#555555" }}>I'm open to <b>job oppportunities</b> where I can contribute to big ambitious projects and grow as a developer. If you have an opportunity 
                    that matches my skillset, please don't hesitate to <b className='bio-tag' style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => scroll(contactRef)}>contact me</b>. If you'd like to learn some more about my professional experience, you can download my resume <a href={resume} download><b className='bio-tag'>here</b></a>.
                </p>
            </div>
            <div className="skills-content">
                <h3>My skills</h3>
                <br></br>
                <div style={{ color: "black" }} className="skills">
                    <div className="skill-entry">HTML</div>
                    <div className="skill-entry">CSS</div>
                    <div className="skill-entry">JavaScript</div>
                    <div className="skill-entry">React</div>
                    <div className="skill-entry">Sass</div>
                    <div className="skill-entry">Firebase</div>
                    <div className="skill-entry">Git</div>
                    <div className="skill-entry">GitHub</div>
                    <div className="skill-entry">Responsive Design</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bio