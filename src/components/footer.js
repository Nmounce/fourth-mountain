import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SocialIcons from '../components/social-icons.js';
import '../css/footer.css';


function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={4} className="footer-name">
                    <h3>Developed by 4th MT/n\ & Nikki Mounce</h3>
                </Col>
                <Col md={4} className="footer-name">
                    <h3>2021</h3>
                </Col>
                <Col md={4} className="footer-body">
                    <SocialIcons/>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;