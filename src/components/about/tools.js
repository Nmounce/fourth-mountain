import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    SiVisualstudiocode,
    SiHeroku,
    SiInsomnia,
    SiCodepen,
    SiCanva
} from 'react-icons/si';


function Tools() {
    return (
        <Row style={{marginTop:'-15%', marginLeft:'5%', marginBottom:'5%'}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
                <p style={{fontSize:'16px'}}>Visual Studio Code</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku />
                <p style={{fontSize:'16px'}}>Heroku</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiInsomnia />
                <p style={{fontSize:'16px'}}>Insomnia</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiCodepen />
                <p style={{fontSize:'16px'}}>CodePen</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiCanva />
                <p style={{fontSize:'16px'}}>Canva</p>
            </Col>
        </Row>
    );
}

export default Tools;