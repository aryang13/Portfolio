import React from 'react';
import '../css/skills.css';
import { Waypoint } from 'react-waypoint'
import { waypointScroller } from '../functions';
import { skills } from '../static/texts';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="skills" className="skills">
                <h2 className="skills-title">SKILLS</h2>
                <Waypoint
                    onEnter={() => {waypointScroller("skills_nav")}}
                >
                    <div className="skills-cards">
                        {skills.map(skill => {
                            return (
                                <SkillsCard 
                                    category={skill.category}
                                    items={skill.items}
                                />
                            )
                        })}
                    </div>
                </Waypoint>
                <br />
            </section>
        );
    }
}

function SkillsCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="skills-header"> 
                    <h5>{props.category}</h5>
                </div>
                <div className="skills-content">
                    {props.items.map(item => {
                        return (
                            <Skills 
                                name={item.name}
                                image={item.image}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function Skills(props) {
    return (
        <div className="skill-content">
            <img src={props.image} className="skill-image"/>
            <div className="skills-name">
                {props.name}
            </div>
        </div>
    )
}