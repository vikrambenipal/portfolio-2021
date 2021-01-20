import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ProjectPage = (props) => {

    const { title, headline, tools, description, media, github } = props.location.state;
    return (
        <div>
            
            <Link to='/'>
                <Button>Back</Button>
            </Link>
            
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ProjectPage;
