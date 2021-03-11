import './Home.css';
import React from 'react';
import Typewriter from './Typewriter';
import { Link } from 'react-router-dom';

function Home({buttonClick}) {

    return (
        <div className="page homepageContainer">
            <div className="bannerContainer">
                <div className="homepage">
                    <h1 className="homeText">
                        <Typewriter printMessage="My name is Mike," initialPause={0} />
                        <br />
                        <Typewriter printMessage="an aspiring front end developer." initialPause={2000} />
                    </h1>
                </div>
            </div>
            <Link to='/about' style={{ textDecoration: 'none' }}><div className="fadeButton fadeButtonHome bold" onClick={() => buttonClick('about')}> About me &gt; </div></Link>
        </div>
    );
}

export default Home;