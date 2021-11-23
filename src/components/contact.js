import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "./particle";
import '../css/contact.css';
import '../css/headers.css';
import ContactHeader from "../assets/images/contact-header.png";
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
            <Container className="contact">
                <Row>
                    <Col md={3} className="contact-card">
                        <AiFillGithub className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Github</h3>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillMail className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Email</h3>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillPhone className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">Phone</h3>
                        </div>
                    </Col>
                    <Col md={3} className="contact-card">
                        <AiFillLinkedin className="contact-icon" />
                        <div className="contact-box">
                            <h3 className="contact-title">LinkedIn</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;