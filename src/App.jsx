import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Work from "./components/Work";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter basename="/">
        <Navbar />
        <Home/>
        <Service/>
        <Work/>
        <Contact/>
        <Media/>
        <Footer/>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
