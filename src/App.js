import React, { useState, useEffect } from "react";
import './css/App.css';
import Preload from "../src/components/preload";
import NavBar from "./components/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./css/index.css";
import "./css/preload.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        updateLoad(false);
      }, 1200);
      return () => clearTimeout(timer);
    }, []);

    return (
      <Router>
        <div className="App">
        <Preload load={load} />
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
export default App;