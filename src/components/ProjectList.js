import React, {Fragment} from 'react'
import Project from './Project';
import projectData from '../data/projects.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectList = () => {

    return (

        <div>
            <Container>
                <Row className="row mx-xl-n5">
                    {projectData.map(project =>(
                        <Col style={{padding: '0px'}}xl={3} lg={4} md={6} sm={12} xs={12} >
                            <p>
                            <Project 
                            title={project.title} 
                            headline={project.headline}
                            tools={project.tools}
                            thumbnail={project.thumbmail}
                            key={project.id}
                            />
                            </p>
                        </Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    )
}

export default ProjectList;
