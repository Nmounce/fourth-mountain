import React from 'react';
import { Sidenav, Nav, Dropdown } from 'rsuite';
import '../css/navbar.css';
import {
    FaHome,
    FaMountain,
    FaLocationArrow,
    FaTree
} from 'react-icons/fa';

// function useHover() {
//     const [hovering, setHovering] = useState(false)
//     const onHoverProps = {
//         onMouseEnter: () => setHovering(true),
//         onMouseLeave: () => setHovering(false),
//     }
//     return [hovering, onHoverProps]
//     };

function SideNavPane() {

    // const [linkAIsHovering, linkAHoverProps] = useHover()
    // const [linkBIsHovering, linkBHoverProps] = useHover()
    // const [linkCIsHovering, linkCHoverProps] = useHover()
    // const [linkDIsHovering, linkDHoverProps] = useHover()


    return(
    <div style={{ width: 240 }}>
        <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
            <Sidenav.Body>
                <Sidenav.Brand href="/">4th MT/n\*</Sidenav.Brand>
                <Nav>
                    <Nav.Item eventKey="1" icon={<FaHome />}></Nav.Item>

                    <Nav.Item eventKey="2" icon={<FaMountain />}></Nav.Item>

                    <Nav.Item eventKey="3" icon={<FaTree />}></Nav.Item>

                    <Dropdown eventKey="4" title="Contact" icon={<FaLocationArrow />}>
                        <Dropdown.Item eventKey="4-1">Contact Info</Dropdown.Item>
                        <Dropdown.Item eventKey="4-2">Project Planner Form</Dropdown.Item>
                        <Dropdown.Item eventKey="4-3">Resume for Nikki Mounce</Dropdown.Item>
                    </Dropdown>
                </Nav>
            </Sidenav.Body>
        </Sidenav>
    </div>
  );
}
export default SideNavPane;