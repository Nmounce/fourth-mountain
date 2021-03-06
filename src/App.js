import React from "react";
import './css/App.css';
import NavBar from "./components/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
export default App;