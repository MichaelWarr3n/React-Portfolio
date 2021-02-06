import React from 'react';
import screenshot from './warm-down-studios-screenshot.png';

function WarmDownStudio() {
        
    return (
        <div className="projectPreview">
            <div className="projectScreenshotContainer">
                <img src={screenshot} className="projectScreenshot" />
            </div>
            <div className="projectTextContainer">
                <p className="projectText">This web app was built using the React JavaScript library, using the React Router package</p>
                <p className="projectText">This is a template for a sports therapist website, which could easily be adapted for a clients needs</p>
            </div>
            <div className="normalButtonContainer">
                <a href="https://michaelwarr3n.github.io/Warm-Down-Studios/" target="_blank" style={{ textDecoration: 'none' }} className="normalButton projectSiteButton"><div> Go to site &gt; </div></a>
            </div>
        </div>
    );
}

export default WarmDownStudio;