import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import '../css/navbar.css';
import {
    FaHome,
    FaHandshake,
    FaMountain,
    FaLocationArrow,
    FaTree
} from 'react-icons/fa';

function useHover() {
const [hovering, setHovering] = useState(false)
const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
}
return [hovering, onHoverProps]
};

function NavBar() {
    const [linkAIsHovering, linkAHoverProps] = useHover()
    const [linkBIsHovering, linkBHoverProps] = useHover()
    const [linkCIsHovering, linkCHoverProps] = useHover()
    const [linkDIsHovering, linkDHoverProps] = useHover()
    const [linkEIsHovering, linkEHoverProps] = useHover()

    return (
        <Navbar className="responsive-navbar-nav">
            <Nav className='ml-auto' defaultActiveKey="#home">
                <Navbar.Brand href="/">4th MT/n\*</Navbar.Brand>
                <Nav.Item>
                    <Nav.Link {...linkAHoverProps} as={Link} to="/">
                        <FaHome style={{ marginBottom: "2px" }} />
                        {linkAIsHovering ? "HOME" : ""}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link {...linkBHoverProps} as={Link} to="/about" >
                        <FaMountain style={{ marginBottom: "2px" }} /> {linkBIsHovering ? "ABOUT" : ""}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link {...linkCHoverProps} as={Link} to="/projects" >
                        <FaTree style={{ marginBottom: "2px" }} /> {linkCIsHovering ? "PROJECTS" : ""}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link {...linkDHoverProps} as={Link} to="/contact" >
                        <FaLocationArrow style={{ marginBottom: "2px" }} /> {linkDIsHovering ? "CONTACT" : ""}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link {...linkEHoverProps} as={Link} to="/resume" >
                        <FaHandshake style={{ marginBottom: "2px" }} /> {linkEIsHovering ? "RESUME" : ""}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
