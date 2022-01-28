import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import '../css/contact.css';
import '../css/headers.css';
// import ProjectPlanner from "./contact-form";
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
            <img className="page-headers" src={ContactHeader} alt='contact' />
            <div className="text-head">
                <h2 className="blurb">Ready to see what we are made of?</h2>
                <h2 className="blurb"> Please take a look at our projects page and shoot us a call, text, email or LinkedIn message to learn more or to schedule  call with Nikki Mounce!</h2>
                <h2 className="blurb">See you on the mountain!</h2>
            </div>
            <Container className="contact">
                <Row>
                    <Col md={3} className="contact-card">
                        <AiFillGithub className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Resume</h3>
                            <btn className="contact-text"><a style={{'color':'rgb(255, 255, 255)'}}href={pdf} target='_blank' rel='noreferrer'>View Resume</a></btn>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillMail className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Email</h3>
                            <btn className="contact-text"><a style={{'color':'rgb(255, 255, 255)'}}href="mailto:nikkicancode@gmail.com">nikkicancode@gmail.com</a></btn>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillPhone className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Phone</h3>
                            <btn className="contact-text">707.396.8094</btn>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillLinkedin className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">LinkedIn</h3>
                            <btn className="contact-text"><a style={{'color':'rgb(255, 255, 255)'}} href="https://www.linkedin.com/in/dominique-nikki-mounce-20327a205/">Dominique Mounce</a></btn>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;