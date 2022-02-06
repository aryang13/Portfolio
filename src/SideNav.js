import React from 'react';
import "./css/SideNav.css";
import profileImage from "./profile_img.jpg";
import { HiOutlineMail } from 'react-icons/hi';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { GrGithub } from 'react-icons/gr';
import { onClickList } from "./functions";
import SmoothScroll from "smooth-scroll";

new SmoothScroll('.navbar a[href*="#"]', {
	speed: 300
});

function SideNav() {
    return (
        <div className="sidenav">
            <div className="intro">
                <img src={profileImage} className="profileImage" />
                <h1>Aryan Gandhi</h1>
                <p>UBC Computer Engineering Student</p>
            </div>
            <div className="content navbar">
                <label id="about_nav" className="listitem selected" onClick={onClickList.bind(this)}>About</label>
                <label id="experience_nav" className="listitem" onClick={onClickList.bind(this)}>Experience</label>
                <label id="projects_nav" className="listitem" onClick={onClickList.bind(this)}>Projects</label>
                <label id="contact_nav" className="listitem" onClick={onClickList.bind(this)}>Contact</label>
            </div>
            <div className="contacts">
                <a href="mailto: gandhi.aryan1310@gmail.com" className="email">
                    <HiOutlineMail />   
                </a>
                <a href="https://www.linkedin.com/in/aryan-gandhi13/" className="linkedin">
                    <RiLinkedinBoxFill />
                </a>
                <a href="https://github.com/aryang13" className="github">
                    <GrGithub />
                </a>
            </div>
        </div>
    );
}

export default SideNav;

/** 
 * TODOS:
 *      - work on onClick Handler for options
 *      - when you scroll changes the side bar according to which pages you are on
 *      - change font of text
 *      - clean up UI (figure out colors and spacing, etc.)
 *      - figure out how to switch to new content without adding to web path
 *              - data-nav-section and data-section
*/