import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialIcons from '../components/social-icons.js';
import '../css/footer.css';

function Footer() {
  return (
    <Container fluid className="footer" >
      <Row>
        <Col md="5">
          <h3 className="footer-text">Designed and Developed by 4th MT/n\*</h3>
        </Col>
        <Col md="4">
          <h3 className="footer-text">Copyright © 2021 4M</h3>
        </Col>
        <Col md="3">
            <SocialIcons />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;


