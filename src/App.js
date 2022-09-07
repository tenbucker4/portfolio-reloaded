import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
    const titleRef = useRef(null);
    const projectRef = useRef(null);
    const bioRef = useRef(null);
    const contactRef = useRef(null);

    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <Nav
                titleRef={titleRef}
                projectRef={projectRef}
                bioRef={bioRef}
                contactRef={contactRef}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Title
                titleRef={titleRef}
                projectRef={projectRef}
                darkMode={darkMode}
            />
            <Bio bioRef={bioRef} darkMode={darkMode} />
            <Projects darkMode={darkMode} projectRef={projectRef} />
            <Contact contactRef={contactRef} />
            <Footer />
        </>
    );
};

export default App;
