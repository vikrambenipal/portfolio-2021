import React from 'react';
import dummyPhoto from '../dummy.png'

const Project = (props) => {

    const { title, headline, tools, thumbnail } = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>{headline}</p>
            <p>Tools: {tools}</p>
            <img src={dummyPhoto} style={{ width: '100px' }}/>
        </div>
    )
}

export default Project;
