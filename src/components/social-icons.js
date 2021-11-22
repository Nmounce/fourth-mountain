import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../css/social-icons.css';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail
} from "react-icons/ai";

function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
    };


function SocialIcons() {
    const [linkAIsHovering, linkAHoverProps] = useHover()
    const [linkBIsHovering, linkBHoverProps] = useHover()
    const [linkCIsHovering, linkCHoverProps] = useHover()

    return (
        <Navbar fluid className="home-intro-container">
            <Nav className="icon-cluster">
                <Nav.Item class="social-icons">
                    <Nav.Link {...linkAHoverProps} as={Link} to="https://github.com/Nmounce">
                        <AiFillGithub class="icon"  />
                        {linkAIsHovering ? "GITHUB" : ""}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item class="social-icons">
                    <Nav.Link {...linkBHoverProps} as={Link} to="https://www.linkedin.com/in/dominique-nikki-mounce-20327a205/" >
                        <AiFillLinkedin class="icon"  /> {linkBIsHovering ? "LINKEDIN" : ""}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item class="social-icons">
                    <Nav.Link class="js-track" {...linkCHoverProps} as={Link} to="mailto:nikkicancode@gmail.com" data-track-action='email submission' data-track-category="contact" >
                        <AiFillMail class="icon" /> {linkCIsHovering ? "EMAIL" : ""}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}
export default SocialIcons;