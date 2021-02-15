import './Experience.css';
import React from 'react';
import { Link } from 'react-router-dom';
import southLogo from './south-logo.png';
import gymsharkLogo from './gymshark-logo.png';
import justitLogo from './justit-logo.jpg';

function Experience({buttonClick}) {

    return (
        <div className="page timelinePage">
            <div className="timelineContainer">
                <div className="timelineLinesContainer">
                    <div className="timeline">
                        <div className="timelineDot">
                            <div className="longLineContainer">
                                <div className="longLine"></div>
                            </div>
                        </div>
                        <div className="timelineDot">
                            <div className="shortLineContainer">
                                <div className="shortLine"></div>
                            </div>
                        </div>
                        <div className="timelineDot">
                            <div className="longLineContainer">
                                <div className="longLine"></div>
                            </div>
                        </div>
                        <div className="timelineDot">
                            <div className="shortLineContainer">
                                <div className="shortLine"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textboxContainer">
                    <div className="firstTimelineSection timelineSection">
                        <img src={southLogo} className="invert timelineIcon" />
                        <p className="timelineText">Whilst completing my education at South Bromsgrove Sixth Form, I worked several jobs in the hospitality sector.</p>
                    </div>
                    <div className="secondTimelineSection timelineSection">
                        <img src={gymsharkLogo} className="timelineIcon" />
                        <p className="timelineText">I landed a job working in the distribution centre of one of the UK's fastest-growing companies, Gymshark, which led me to the next step in my career.</p>        
                    </div>
                    <div className="thirdTimelineSection timelineSection">
                        <img src={gymsharkLogo} className="timelineIcon" />
                        <p className="timelineText">After 1 year of working in the distribution centre, I was promoted and began working as a logistics link for the brand team in the head office. In this role, I built up many professional skills and met a lot of inspirational people.</p>     
                    </div>
                    <div className="fourthTimelineSection timelineSection">
                        <img src={justitLogo} className="timelineIcon" />
                        <p className="timelineText">After a lot of planning, I left my role at Gymshark to take some time out travelling in South America, before starting a self-funded software development course with Just IT. As I build my skill set, my excitement to move into the sector only grows.</p>
                    </div>
                </div>
                <Link to='/React-Portfolio/contact' style={{ textDecoration: 'none' }}><div className="fadeButton fadeButtonExperienceMobile bold" onClick={() => buttonClick('contact')}> Contact me &gt; </div></Link>
            </div>
        </div>
    );
}

export default Experience;