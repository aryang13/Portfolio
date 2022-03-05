import React from 'react';
import '../css/experience.css';
import { Waypoint } from 'react-waypoint';
import { waypointScroller } from '../functions';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="experience" className="experience">
                <h2 className="experience-title">EXPERIENCE</h2>
                <Waypoint
                    onEnter={() => {waypointScroller("experience_nav")}}
                >
                    <div></div>
                </Waypoint>
            </section>
        );
    }
}