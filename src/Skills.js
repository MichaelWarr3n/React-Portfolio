import './Skills.css';
import React from 'react';
import html from './html5.png';
import css from './css-3.png';
import js from './js-file.png';
import reactIcon from './react.png';
import expressjs from './express-js.png';
import { Link } from 'react-router-dom';

function Skills({buttonClick}) {

    return (
        <div className="page skillPage">
            <div className="skillIcons">
                <span className="skillIconLabel">
                    <img src={html} className="invert skillIcon" />
                    <div className="horizontalFlex">
                        <p className="skillLabel bold">HTML5</p>
                        <div className="meter">
                            <span className="htmlWidth"><span className="progress"></span></span>
                        </div>
                    </div>
                </span>
                <span className="skillIconLabel">
                    <img src={css} className="invert skillIcon" />
                    <div className="horizontalFlex">
                        <p className="skillLabel bold">CSS3</p>
                        <div className="meter">
                            <span className="cssWidth"><span className="progress"></span></span>
                        </div>
                    </div>
                </span>
                <span className="skillIconLabel">
                    <img src={js} className="skillIcon" />
                    <div className="horizontalFlex">
                        <p className="skillLabel bold">JavaScript</p>
                        <div className="meter">
                            <span className="jsWidth"><span className="progress"></span></span>
                        </div>
                    </div>
                </span>
                <span className="skillIconLabel">
                    <img src={reactIcon} className="skillIcon" />
                    <div className="horizontalFlex">
                        <p className="skillLabel bold">React</p>
                        <div className="meter">
                            <span className="reactWidth"><span className="progress"></span></span>
                        </div>
                    </div>
                </span>
                <span className="skillIconLabel">
                    <img src={expressjs} className="skillIcon invert" />
                    <div className="horizontalFlex">
                        <p className="skillLabel bold">Express.js</p>
                        <div className="meter">
                            <span className="nodeWidth"><span className="progress"></span></span>
                        </div>
                    </div>
                </span>
            </div>
            <Link to='/React-Portfolio/projects/memory-game' style={{ textDecoration: 'none' }}>
                <div className="fadeButton fadeButtonSkills bold" onClick={() => buttonClick('projects')}> Projects &gt; </div>
            </Link>
        </div>
    );
}

export default Skills;