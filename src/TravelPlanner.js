import React from 'react';
import screenshot from './travel-tracker-screenshot.png';

function TravelPlanner() {
        
    return (
        <div className="projectPreview">
            <div className="projectScreenshotContainer">
                <img src={screenshot} className="projectScreenshot" />
            </div>
            <div className="projectTextContainer">
                <p className="projectText">This web app was built using HTML, CSS and vanilla JavaScript, and data from the Openweather API, Foursquare venues API and the Covid-19 API. API keys are stored in a basic express.js server hosted by Heroku.</p>
                <p className="projectText">Search for a city you would like to visit and find information on daily Covid-19 cases, today's weather forecast and a list of attractions you might want to go and visit.</p>
            </div>
            <div className="normalButtonContainer">
                <a href="https://michaelwarr3n.github.io/Travel-Planner/" target="_blank" style={{ textDecoration: 'none' }} className="normalButton projectSiteButton"><div> Go to site &gt; </div></a>
            </div>
        </div>
    );
}

export default TravelPlanner;


        