import React from 'react';
import screenshot from './memory-game-screenshot.png';

function MemoryGame() {
        
    return (
        <div className="projectPreview">
            <div className="projectScreenshotContainer">
                <img src={screenshot} className="projectScreenshot" />
            </div>
            <div className="projectTextContainer">
                <p className="projectText">This web app was built using HTML, CSS and vanilla JavaScript.</p>
                <p className="projectText">Test your memory skills - uncover all the tiles to win!</p>
            </div>
            <div className="normalButtonContainer">
                <a href="https://michaelwarr3n.github.io/Memory-Game/" target="_blank" style={{ textDecoration: 'none' }} className="normalButton projectSiteButton"><div> Go to site &gt; </div></a>
            </div>
        </div>
    );
}

export default MemoryGame;