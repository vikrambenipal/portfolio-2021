import React from 'react'
import Picture from '../me.jpg';

const About = () => {
    return (
        <div>
            <h1>My name is Vikram, nice to meet you!</h1>
            <p>I was a designer and now I'm not, please hire me!</p>
            <img src={Picture} style={{ width: '150px'}}/>
        </div>
    )
}

export default About;
