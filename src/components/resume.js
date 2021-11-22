import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./particle";
import pdf from "../assets/nikkiresume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/Nmounce/portfolio-business/main/src/assets/nikkiresume.pdf";

function DisplayResume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-container">
                <Particle />
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Document file={resumeLink}>
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button variant='primary' href={pdf} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default DisplayResume;