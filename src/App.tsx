import './App.css';
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {

    return (
        <>
            <NavBar/>
            <MainPage/>
            <AboutMe/>
            {/*<hr/>*/}
            <Footer/>
        </>
    )
}

export default App;
