import './About.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from './MJW-CV.pdf';

function About({buttonClick}) {

    return (
        <div className="page aboutPage">
            <div className="imageContainer"></div>
            <div className="aboutTextContainer">
                <span className="aboutTextSection">
                    <p className="aboutText">I have always had a spark for problem-solving and a curiosity for computer technology, taking a screwdriver to PC towers and laptops to see how they work from a young age. As I have matured my interest in computer technology led to becoming a hobbyist software developer. 
                        I love using the React framework, it brings together the logic of javascript with the styling of HTML and CSS in a very clean way. I've learnt a lot of soft skills from my most recent role at Gymshark, developing strong communication skills liaising with departments throughout the business and sponsored social media affiliates. 
                        I also developed strong organisational and timekeeping skills working in a fast-paced professional environment. After several years of working in many different roles, I want to get myself on the road to a new career I am passionate about, so I chose to start a self-funded development course with Just IT.  
                        I am now ready and excited to move into my first Junior Developer role and continue to build on my skills.
                    </p>
                    <div className="aboutButtonContainer">
                        <a href={Pdf} target='_blank' style={{ textDecoration: 'none' }}><div className="fadeButton fadeButtonAboutCv bold">CV</div></a>
                        <Link to='/React-Portfolio/skills' style={{ textDecoration: 'none' }}><div className="fadeButton fadeButtonAbout bold" onClick={() => buttonClick('skills')}> My skills &gt; </div></Link>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default About;