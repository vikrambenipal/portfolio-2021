import React from 'react';
import dummyPhoto from '../dummy.png'
import { Link } from 'react-router-dom';

const Project = (props) => {

    const { title, headline, tools, thumbnail } = props;
    return (
        <div>
            <Link to={{
                pathname: `/projects/${title}`,
                state: {
                    title,
                    headline,
                    tools
                }
            }}
            >More Info</Link>
            <h3>{title}</h3>
            <p>{headline}</p>
            <p>Tools: {tools}</p>
            <img src={dummyPhoto} style={{ width: '100px' }}/>
        </div>
    )
}

export default Project;
