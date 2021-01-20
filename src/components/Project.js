import React, {Fragment} from 'react';
import dummyPhoto from '../dummy.png';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = (props) => {

    const { title, headline, tools, thumbnail, description, github, media } = props;
    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dummyPhoto} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{headline}</Card.Text>
                    <Link to={{
                        pathname: `/projects/${title}`,
                        state: {
                        title,
                        headline,
                        tools,
                        thumbnail,
                        description,
                        github,
                        media
                        }
                    }}>
                        <Button variant="primary">Project Information</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Project;
