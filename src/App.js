import React from "react";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import "./index.css";

const App = () => {
    return (
        <>
            <Nav />
            <Title />
            <Bio />
            <Projects />
        </>
    );
};

export default App;
