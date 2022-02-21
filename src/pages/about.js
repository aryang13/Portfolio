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
            <section id="about">
                <br/>
                <Waypoint
                    onEnter={() => {waypointScroller("about_nav")}}
                >
                    <h1>ABOUT</h1>
                </Waypoint>
            </section>
        );
    }
}