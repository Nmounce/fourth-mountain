import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "./particle";
import '../css/contact.css';
import '../css/headers.css';
import ProjectPlanner from "../components/project-planner";
import ContactHeader from "../assets/images/contact-header.png";
import pdf from "../assets/nikkiresume.pdf";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail,
    AiFillPhone
} from "react-icons/ai";

function Contact() {
    return (
        <Container>
            <Particle />
            <img className="page-headers" src={ContactHeader} alt='contact' />
            <div className="text-head">
                <h2 className="blurb">Ready to see what we are made of?</h2>
                <h2 className="blurb"> Complete the<a href={ProjectPlanner}rel='noreferrer'> Project Planner</a> form to get a quote for a competitive rate based on your project requirements. We look forward to working with you!</h2>
                <h2 className="blurb">See you on the mountain!</h2>
            </div>
            <Container className="contact">
                <Row>
                    <Col md={3} className="contact-card">
                        <AiFillGithub className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Resume</h3>
                            <p className="contact-text"><a href={pdf} target='_blank' rel='noreferrer'>View Resume</a></p>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillMail className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Email</h3>
                            <p className="contact-text"><a href="mailto:nikkicancode@gmail.com">nikkicancode@gmail.com</a></p>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillPhone className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Phone</h3>
                            <p className="contact-text">707.396.8094</p>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillLinkedin className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">LinkedIn</h3>
                            <p className="contact-text"><a href="https://www.linkedin.com/in/dominique-nikki-mounce-20327a205/">Dominique Mounce</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;