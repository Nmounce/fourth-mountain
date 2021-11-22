import React from 'react';
import { Container} from "react-bootstrap";
import Particle from "../particle";
import aboutImg from "../../assets/images/about.png";
import techImage from "../../assets/images/tech-header.png";
import toolsImage from "../../assets/images/tools-header.png";
import Tech from "./tech";
import Tools from "./tools";
import '../../css/about.css';

function About() {
    return (
        <div className="about-section" >
            <Particle />
            <Container fluid>
                <img src={aboutImg} alt="about" className="about-image" />
                <img src={techImage} alt="the tech" className="tHeaders" />
                    <Tech className="tBoxes"/>
                <img src={toolsImage} alt="the tools" className="tHeaders" />
                    <Tools className="tBoxes"/>
            </Container>
        </div>
    );
}

export default About;
