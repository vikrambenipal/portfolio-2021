import React from 'react'
import Project from './Project';
import projectData from '../data/projects.json';

const ProjectList = () => {

    return (

        <div>
            {projectData.map(project =>(
                <Project 
                title={project.title} 
                headline={project.headline}
                tools={project.tools}
                thumbnail={project.thumbmail}
                key={project.id}
                />
            ))}
        </div>
    )
}

export default ProjectList;
