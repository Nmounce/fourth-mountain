import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./projectCard";
import '../../css/projects.css';
import '../../css/headers.css';

import photo1 from "../../assets/project-images/photo1.png";
import photo2 from "../../assets/project-images/photo2.png";
import photo3 from "../../assets/project-images/photo3.png";
import photo4 from "../../assets/project-images/photo4.png";
import photo5 from "../../assets/project-images/photo5.png";
import photo6 from "../../assets/project-images/photo6.png";
import photo7 from "../../assets/project-images/photo7.png";
import photo8 from "../../assets/project-images/photo8.png";
import photo9 from "../../assets/project-images/photo9.png";

import photoH from "../../assets/images/project-header.png";

function Projects() {

    const UCBlurb = "This app was part of the UC Davis Full Stack Development Coding Bootcamp program assignments";

    return (
        <Container className="project-container">
            <img className="page-headers" src={photoH} alt="projects" />
            <Container>
                <div className="project-section">
                    <div className="project-cards">
                        <Row style={{ justifyContent: 'center' }}>
                        <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo2}
                                        title='North Bay Arborist Reports'
                                        text='Wordpress Development'
                                        subText='This app was developed for the business owned by my husband and myself for use in marketing'
                                        link1='https://github.com/Nmounce/north-bay-arborist-reports.git'
                                        link2='https://www.thebayarborist.com/'
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo7}
                                        title='Salonly'
                                        text='React/Store Component'
                                        subText={UCBlurb}
                                        link1='https://github.com/Nmounce/salon-project.git'
                                        link2="https://shrouded-springs-95173.herokuapp.com/"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo1}
                                        title='Ubiquitous Happiness'
                                        text='Design and UI'
                                        subText={UCBlurb}
                                        link1='https://github.com/Myuze/ubiquitous-happiness.git'
                                        link2="https://ubiquitous-p2.herokuapp.com/home"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo8}
                                        title='Mellifluous'
                                        text='Design and UI'
                                        subText={UCBlurb}
                                        link1='https://github.com/Nmounce/project-01.git'
                                        link2="https://nmounce.github.io/project-01/"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo3}
                                        title='CMS-Style Tech Blog'
                                        text='Sole Developer'
                                        subText={UCBlurb}
                                        link1='https://github.com/Nmounce/Tech-Blog.git'
                                        // link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo4}
                                        title='Password Generator'
                                        text='Sole Developer'
                                        subText={UCBlurb}
                                        link1='https://github.com/Nmounce/Password-Generator.git'
                                        link2="https://nmounce.github.io/Password-Generator"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo5}
                                        title='Regex Tutorial'
                                        text='Author'
                                        subText={UCBlurb}
                                        link1='https://gist.github.com/Nmounce/3bb29f1ef502bde3c3fb47820ea04abc'
                                        // link2=""
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo6}
                                        title='Workout Tracker'
                                        text='Front-End Build'
                                        subText={UCBlurb}
                                        link1='https://github.com/Nmounce/workout-tracker.git'
                                        link2="https://afternoon-ridge-78920.herokuapp.com/?id=6178ac5eed66dbe7e3d5c1d6"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo9}
                                        title='README Generator'
                                        text='Sole Developer'
                                        subText={UCBlurb}
                                        link1='https://github.com/Nmounce/read-me-generator.git'
                                        link2="https://nmounce.github.io/read-me-generator/"
                                    />
                            </Col>
                        </Row>
                        <div style={{'marginBottom': '10%'}}/>
                    </div>
                </div>
                </Container>
        </Container>
    )
}

export default Projects;




