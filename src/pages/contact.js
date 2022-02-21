import React from 'react';
import '../css/pages.css';
import { Waypoint } from 'react-waypoint';
import { waypointScroller } from '../functions'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="contact">
                <br/>
                <Waypoint
                    onEnter={() => {waypointScroller("contact_nav")}}
                >
                    <h1>CONTACT</h1>
                </Waypoint>
            </section>
        );
    }
}