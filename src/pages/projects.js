import React from 'react';
import '../css/projects.css';
import { Waypoint } from 'react-waypoint'
import { waypointScroller } from '../functions';

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
                    <div></div>
                </Waypoint>
            </section>
        );
    }
}