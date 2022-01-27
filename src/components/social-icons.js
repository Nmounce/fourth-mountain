import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/social-icons.css';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail, AiFillPhone
} from "react-icons/ai";

function SocialIcons() {

    return (
        <Navbar fluid className="home-intro-container" style={{backgroundColor:'none'}}>
            <Nav className="icon-cluster">
                <Nav.Link>
                     <AiFillGithub class="icon"  />
                </Nav.Link>
                <Nav.Link>
                    <AiFillLinkedin class="icon"  />
                 </Nav.Link>
                <Nav.Link class="js-track"  to="mailto:nikkicancode@gmail.com" data-track-action='email submission' data-track-category="contact" >
                    <AiFillMail class="icon" />
                </Nav.Link>
                <Nav.Link>
                    <AiFillPhone class="icon"  />
                 </Nav.Link>
            </Nav>
        </Navbar>
    );
}
export default SocialIcons;