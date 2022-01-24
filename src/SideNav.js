import React from 'react';
import "./css/SideNav.css";
import profileImage from "./profile_img.jpg";
import { FaRegEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { onClickList } from "./functions"


function SideNav() {
    return (
        <div className="sidenav">
            <div classname="intro">
                <img src={profileImage} className="profileImage" />
                <h1>Aryan Gandhi</h1>
                <p>UBC Computer Engineering Student</p>
            </div>
            <div className="content">
                <a href="#home" className="listitem" onClick={onClickList.bind(this)}>About</a>
                <a href="#home" className="listitem" onClick={onClickList.bind(this)}>Experience</a>
                <a href="#home" className="listitem">Projects</a>
                <a href="#home" className="listitem">Contact Me</a>
            </div>
            <div className="contacts">
                <a href="mailto: gandhi.aryan1310@gmail.com" class="email">
                    <FaRegEnvelope />   
                </a>
                <a href="https://www.linkedin.com/in/aryan-gandhi13/" class="linkedin">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/aryang13" class="github">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default SideNav;