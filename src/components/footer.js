import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialIcons from '../components/social-icons.js';
import '../css/footer.css';

function Footer() {
  return (
    <Container fluid className="footer" >
      <Row>
        <Col />
        <Col md="3">
          <h3 className="footer-text">Call Me Nikki</h3>
          <p className="footer-subtext">Welcome to me! I am a career safety specialist, a stay-at-home mom and a budding developer. I am and will continue to work at becoming a great developer and designer. I am currently open to Freelance and remote professional software developer roles!</p>
        </Col>
        <Col md="3">
          <h3 className="footer-text">4th MT/n\*</h3>
          <p className="footer-subtext">The name "Fourth Mountain" was created to pay homage to my home, the Sierra Nevada Mountains. The Sierras are the 4th largest mountain range in the US, spanning over 400 miles and is home to one of the highest peaks, the tallest tree, and the largest alpine lake.</p>
        </Col>
        <Col md="2">
          <h3 className="footer-text">Discover the Sierras</h3>
          <ul className="visit-links">
            <li><a style={{ 'color': 'black' }}href="https://www.nps.gov/yose/index.html">Yosemite National Park</a></li>
            <li><a style={{ 'color': 'black' }}href="https://www.parks.ca.gov/?page_id=551">Calaveras Big Trees</a></li>
            <li><a style={{ 'color': 'black' }}href="https://www.visitmammoth.com/">Mammoth Lakes</a></li>
            <li><a style={{ 'color': 'black' }}href="https://visitinglaketahoe.com/">Lake Tahoe</a></li>
            <li><a style={{ 'color': 'black' }}href="https://www.parks.ca.gov/?page_id=509">Bodie State Historic Park</a></li>
          </ul>
        </Col>
        <Col md="2">
        <h3 className="footer-text">Social</h3>
          <SocialIcons />
          <p className="copyright">Copyright © 2022 4th MT/n\*</p>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default Footer;


