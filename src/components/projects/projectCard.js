import React from "react";
import { Card, Button} from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import '../../css/social-icons.css';
import '../../css/projects.css';

function ProjectCard(props) {
    return (
        <Card>
            <Card.Img variant='top' src={props.imgPath} alt='card-image' />
            <Card.Body>
                <Card.Title style={{
                    fontSize: '40px', color: '#b35900',
                    fontFamily: 'Caveat'
                }}>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Card.Text className='sub-text'>{props.subText}</Card.Text>
                <Button variant="secondary" class="social-icons" href={props.link1} target='_blank'>View The Repo
                    <AiFillGithub style={{ width: '30px', height: '30px', color:'#e67300', marginLeft:'1px' }}/>
                </Button>
                <Button variant="secondary" class="social-icons" href={props.link2} target='_blank'>See It Live
                <CgWebsite style={{ width: '30px', height: '30px', color:'#e67300', marginLeft:'1px'}}/>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;