import React from 'react';
import "./css/SideNav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from "./profile_img.jpg";
import { HiOutlineMail } from 'react-icons/hi';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { GrGithub } from 'react-icons/gr';
import { BsPersonFill } from 'react-icons/bs';
import { FiTrendingUp } from 'react-icons/fi'
import { MdWeb, MdOutlineContactPage } from 'react-icons/md';
import { onClickList, clickHandler } from "./functions";
import SmoothScroll from "smooth-scroll";

new SmoothScroll('.navbar a[href*="#"]', {
	speed: 300
});

function SideNav() {
    return (
        <div className="sidenav d-flex flex-column flex-shrink-0 p-3 bg-light">
            <div className="intro">
                <h1 className="name" onClick={() => {clickHandler("home")}}>Aryan Gandhi</h1>
                <p className="info">UBC Computer Engineering Student</p>
            </div>
            <hr/>
            <ul className="content navbar menu nav nav-pills flex-column mb-auto">
                <div className="nav-item">
                    <div id="about_nav" className="listitem" onClick={onClickList.bind(this)}>
                        <BsPersonFill className="icon"/>
                        <label>About</label>
                    </div> 
                </div>
                <div className="nav-item">
                    <div id="experience_nav" className="listitem" onClick={onClickList.bind(this)} >
                        <FiTrendingUp className="icon"/>
                        <label>Experience</label>
                    </div> 
                </div>
                <div className="nav-item">
                    <div  id="projects_nav" className="listitem" onClick={onClickList.bind(this)}>
                        <MdWeb className="icon"/>
                        <label>Projects</label>
                    </div> 
                </div>
                <div className="nav-item">
                    <div id="contact_nav" className="listitem" onClick={onClickList.bind(this)}>
                        <MdOutlineContactPage className="icon"/>
                        <label>Contact</label>
                    </div> 
                </div>
            </ul>
            <div className="contacts dropdown">
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
 *      - Separate navbar components into separate file
 *      - change font of text
 *      - clean up UI (figure out colors and spacing, etc.)
*/