import React, { useState } from "react";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import "./index.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
            <Title darkMode={darkMode} />
            <Bio darkMode={darkMode} />
            <Projects darkMode={darkMode} />
        </>
    );
};

export default App;
