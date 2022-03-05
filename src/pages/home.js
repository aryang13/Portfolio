import React from 'react';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import image from "../profile_img.jpg";
import resume from "../Aryan Gandhi Resume.pdf"
import { Waypoint } from 'react-waypoint';
import { removeSelected, clickHandler } from '../functions';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="home" className="home">
                <div className="homeContainer">
                    <img src={image} className="image"/>
                    <div className="rightPanel">
                        <div className="info">
                            <Waypoint
                                onEnter={() => {removeSelected()}}
                            >
                                <div className="text">
                                    I am Aryan Gandhi 
                                    <br/>
                                    A <span> </span>
                                    <br/>
                                    <a href={resume} type="button" className="btn btn-outline-dark">
                                        <IoDocumentTextOutline className="icon"/>
                                        <label className="resume">Resume</label>
                                    </a>
                                </div>
                            </Waypoint>
                        </div>
                        <div className="nextPage">
                            <label className="view">Learn More</label>
                            <button className="arrow floating" onClick={() => {clickHandler("about")}}>
                                <IoIosArrowDown/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

/**
 * TODO: 
 * 1. Draw out layout
 * 2. Fix font and placing of words
 * 3. clean up and link resume button to resume 
 * 4. Add background image/video
 */