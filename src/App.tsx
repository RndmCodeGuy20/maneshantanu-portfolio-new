import './App.css';
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import {Education} from "./components/Education";
import React from "react";
import {Projects} from "./components/Projects";

function App() {

    return (
        <>
            <NavBar/>
            <MainPage/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default App;
