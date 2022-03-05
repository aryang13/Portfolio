import React from 'react';
import '../css/contact.css';
import { Waypoint } from 'react-waypoint';
import { waypointScroller } from '../functions'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="contact" className="contact">
                <h2 className="contact-title">CONTACT</h2>
                <Waypoint
                    onEnter={() => {waypointScroller("contact_nav")}}
                >
                    <div></div>
                </Waypoint>
            </section>
        );
    }
}