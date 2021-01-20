import React from 'react'
import Picture from '../me.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <div>
            <Container className="mt-5" style={{height: '600px'}}>
                <Row>
                    <Col  className="justify-content-center">
                        <h1>My name is Vikram, nice to meet you!</h1>
                        <p>I'm a developer who develops things. Check out my projects below!</p>
                    </Col>
                    <Col>
                        <img src={Picture} alt="" style={{ width: '120px'}}/>
                    </Col>
                </Row>
            </Container>
            <h1>Check out some of my projects!</h1>
        </div>
    )
}

export default About;
