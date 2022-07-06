import React from 'react';
import '../css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Waypoint } from 'react-waypoint';
import { waypointScroller } from '../functions';
import Iframe from 'react-iframe'

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">CONTACT</h2>
            <Waypoint
                onEnter={() => {waypointScroller("contact_nav")}}
            >
                <div className="row align-items-stretch justify-content-center no-gutters contact-form">
                    <div className="col-md-6">
                        <div className="form h-100 contact-wrap p-5">
                            <h3 className="text-center">Let's Talk</h3>
                            <br />
                            <form className="mb-5" name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSeqDPr25d1BzHPL6Gl9BbUAPLdWoN_0sgKauz5O4eAe6BuNpQ/formResponse?" target="submitted">
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <label className="col-form-label">Name</label>
                                        <input type="text" className="form-control" name="entry.697505322" id="entry.697505322" placeholder="Your name"/>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label className="col-form-label">Email</label>
                                        <input type="email" className="form-control" name="entry.420531831" id="entry.420531831" placeholder="Your email"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group mb-3">
                                        <label className="col-form-label">Subject</label>
                                        <input type="text" className="form-control" name="entry.899790813" id="entry.899790813" placeholder="Your subject"/>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-12 form-group mb-3">
                                        <label className="col-form-label">Message</label>
                                        <textarea className="form-control" name="entry.1282469293" id="entry.1282469293" cols="30" rows="4" placeholder="Write your message"></textarea>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-5 form-group text-center">
                                        <input id="submit-button" type="submit" value="Send Message" className="btn btn-block btn-primary send-button"/>
                                    </div>
                                </div>
                            </form>
                            <Iframe
                                id="submitted"
                                name="submitted"
                                display="none"
                            />
                        </div>
                    </div>
                </div>
            </Waypoint>
        </section>
    );
}