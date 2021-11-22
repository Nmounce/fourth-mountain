import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    DiNodejs, DiReact, DiMongodb, DiGit, DiJavascript1, DiMysql
} from "react-icons/di";
import {
    SiBootstrap, SiJquery, SiGraphql, SiPython
} from "react-icons/si";

function Tech() {
    return (
        <Row style={{marginTop:'-15%', marginLeft:'5%'}}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <p style={{fontSize:'16px'}}>Javascript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <p style={{fontSize:'16px'}}>Git</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiPython />
                <p style={{fontSize:'16px'}}>Python</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < DiMongodb />
                <p style={{fontSize:'16px'}}>MongoDB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiJquery />
                <p style={{fontSize:'16px'}}>JQuery</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                <p style={{fontSize:'16px'}}>React</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap />
                <p style={{fontSize:'16px'}}>Bootstrap</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
                <p style={{fontSize:'16px'}}>Node</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql />
                <p style={{fontSize:'16px'}}>MySQL</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGraphql />
                <p style={{fontSize:'16px'}}>GraphSQL</p>
            </Col>
        </Row>
    );
}

export default Tech;