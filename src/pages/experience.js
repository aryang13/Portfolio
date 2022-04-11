import React from 'react';
import '../css/experience.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Waypoint } from 'react-waypoint';
import { waypointScroller } from '../functions';
import { jobExperience } from '../static/texts';

export default class Experience extends React.Component {
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
                    <div className="experience-cards">
                        {
                            jobExperience.map(job => {
                                return (
                                    <ExperienceCard
                                        website={job.website}
                                        image={job.image}
                                        companyName={job.companyName}
                                        companyRole={job.companyRole}
                                        companyDescripton={job.descripton}
                                        jobTasks={job.roles}
                                        date={job.date}
                                        location={job.location}
                                    />
                                );
                            })
                        }
                    </div>
                </Waypoint>
            </section>
        );
    }
}

function ExperienceCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="header"> 
                    <div className="job-image">
                        <a href={props.website}>
                            <img className="company-image" src={props.image}/>
                        </a>
                    </div>
                    <div className="job">
                        <a href={props.website} className="company-title">{props.companyName}</a>
                        <div className="job-role">{props.companyRole}</div>
                    </div>
                </div>
                <div className="description">
                    <p className="company-description">
                        <i>{props.companyDescripton}</i>
                    </p>
                    <ul>
                        {
                            props.jobTasks.map(text => {
                                return (
                                    <li className="job-role">{text}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="card-footer bg-light footer">
                <span>{props.date} | {props.location}</span>
            </div>
        </div>
    )
}