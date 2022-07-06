import React from 'react';
import '../css/projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Waypoint } from 'react-waypoint'
import { waypointScroller } from '../functions';
import{ BsGithub } from "react-icons/bs";
import { projects } from '../static/texts';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="projects" className="projects">
                <h2 className="projects-title">PROJECTS</h2>
                <Waypoint
                    onEnter={() => {waypointScroller("projects_nav")}}
                >
                    <div className="project-cards"> 
                        {
                            projects.map(project => {
                                return ( 
                                    <ProjectCard 
                                        name={project.name}
                                        image={project.image}
                                        link={project.link}
                                        description={project.description}
                                        accomplishments={project.accomplishments}
                                    />
                                )
                            })
                        }
                    </div>
                </Waypoint>
            </section>
        );
    }
}

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="card project-info">
                <div className="project-card-front">
                    <img src={props.image} className="card-img-top project-image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
                <div className="project-card-back">
                    <div className="card project-accomplishments">
                        <div className="card-body">
                            <h5 className="card-title text-center project-back-title">Accomplishments</h5>
                            <div className="card-text project-back-info">
                                {
                                    props.accomplishments.map(accomplishment => {
                                        return (
                                            <li>{accomplishment}</li>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        {props.link ? 
                            <div className="card-footer">
                                <a href="https://github.com/aryang13" className="github">
                                    < BsGithub />
                                </a>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}