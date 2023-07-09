import './App.css';
import NavBar from "./pages/NavBar";
import MainPage from "./pages/MainPage";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import {Education} from "./pages/Education";
import React from "react";
import {Projects} from "./pages/Projects";

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
