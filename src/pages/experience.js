import React from 'react';
import '../css/pages.css';
import { Waypoint } from 'react-waypoint';
import { waypointScroller } from '../functions';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="experience">
                <Waypoint
                    onEnter={() => {waypointScroller("experience_nav")}}
                >
                    <h1>EXPERIENCE</h1>
                </Waypoint>
            </section>
        );
    }
}