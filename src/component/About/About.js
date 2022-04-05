import React from 'react';
import aboutUs from './../../images/about-us.jpg';
import './../Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faMailBulk, faMailForward, faMessage } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className='about-us'>
            <img src={aboutUs} alt="" />
            <button className='contact-btn'>Contact Us <span><FontAwesomeIcon icon={faMailForward}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default About;