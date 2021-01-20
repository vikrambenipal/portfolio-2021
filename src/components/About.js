import React from 'react'
import Picture from '../me.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

const About = () => {
    return (
        <div>
            <Jumbotron>
                <h1>My name is Vikram, nice to meet you!</h1>
                <p>I'm a developer who develops things. Check out my projects below!</p>
                <img src={Picture} alt="" style={{ width: '120px'}}/>
            </Jumbotron>
            
            <h1>Check out some of my projects!</h1>
        </div>
    )
}

export default About;
