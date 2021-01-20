import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = (props) => {

    const { title, headline, tools } = props.location.state;
    return (
        <div>
            <Link to='/'>Home</Link>
            {title}
            <h1>Hi</h1>
        </div>
    )
}

export default ProjectPage;
