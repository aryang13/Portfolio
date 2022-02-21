import React from 'react';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Home from './pages/home'
import './css/pages.css'

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pages">
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        );
    }
}