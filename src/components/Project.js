import React from 'react';
import dummyPhoto from '../dummy.png';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = (props) => {

    const { title, headline, tools, thumbnail } = props;
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={dummyPhoto} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{headline}</Card.Text>
                    <Link to={{
                        pathname: `/projects/${title}`,
                        state: {
                        title,
                        headline,
                        tools
                        }
                    }}>
                        <Button variant="primary">Project Information</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Project;
