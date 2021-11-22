import React, { useState, useEffect } from "react";
import './app.css';
import Preload from "../src/components/pre";
import Navbar from "./components/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import Contact from "./components/contact/contact";
import Resume from "./components/resume";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./css/main.css";
import "./css/index.css";
import "./css/preload.css";
import "./css/scrollbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ScrollToTop from "./components/scrollToTop";

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
        <Preload load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Resume" element={<Resume />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
export default App;