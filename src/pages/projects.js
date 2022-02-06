import React from 'react';
import '../css/pages.css';
import { Waypoint } from 'react-waypoint'
import { waypointScroller } from '../functions';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="projects">
                <Waypoint
                    onEnter={() => {waypointScroller("projects_nav")}}
                >
                    <h1>PROJECTS</h1>
                </Waypoint>
            </section>
        );
    }
}