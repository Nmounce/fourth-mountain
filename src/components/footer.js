import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialIcons from '../components/social-icons.js';
import '../css/footer.css';

function Footer() {
  return (
    <Container fluid className="footer" >
      <Row>
        <Col md="5" className="footer-text">
          <h3>Designed and Developed by 4th MT/n\*</h3>
        </Col>
        <Col md="4" className="footer-text">
          <h3>Copyright © 2021 4M</h3>
        </Col>
        <Col md="3" style={{backgroundColor:'none'}}>
            <SocialIcons />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;


