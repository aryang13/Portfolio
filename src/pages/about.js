import React from 'react';
import '../css/about.css';
import { Waypoint } from 'react-waypoint';
import { waypointScroller } from '../functions';
import { aboutSection, aboutTools } from '../static/texts';
export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let infoText = aboutSection;
        return (
            <section id="about" className="about">
                <h2 className="about-title">ABOUT</h2>
                <Waypoint
                    onEnter={() => {waypointScroller("about_nav")}}
                >
                    <div className="about-text">
                        <div className="about-info">
                            {
                                Object.values(infoText).map(text => {
                                    return (
                                        <p>{text}</p>
                                    );
                                })
                            }
                        </div>
                        <div className="about-skills">
                            <p><strong>{"Programming Langauges and Technologies: "}</strong>{aboutTools.aboutProgrammingLanguage}</p>
                            <p><strong>{"Hardware: "}</strong>{aboutTools.aboutHardware}</p>
                        </div>
                    </div>
                </Waypoint>
                <br />
            </section>
        );
    }
}