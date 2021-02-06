import './Projects.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MemoryGame from './MemoryGame';
import TravelPlanner from './TravelPlanner';
import WarmDownStudio from './WarmDownStudio';

function Projects({ buttonClick }) {

    const [activeProject, setActiveProject] = useState('memory-game');

    function handleProjectClick(projectName) {
        setActiveProject(projectName);
    };

    const navStyle = { textDecoration: 'none' };

    return (
        <div className="page">
            <Router>
                <div className="projectContainer">
                    <div className="projectSelectors">
                        <Link style={navStyle} onClick={() => handleProjectClick('memory-game')} className={"projectSelector bold " + (activeProject === 'memory-game' ? 'activeProject' : '')} to='/React-Portfolio/projects/memory-game'>
                            <p>Memory Game</p>
                        </Link>
                        <Link style={navStyle} onClick={() => handleProjectClick('travel-planner')} className={"projectSelector bold " + (activeProject === 'travel-planner' ? 'activeProject' : '')} to='/React-Portfolio/projects/travel-planner'>
                            <p>Travel Planner</p>
                        </Link>
                        <Link style={navStyle} onClick={() => handleProjectClick('warm-down-studio')} className={"projectSelector bold " + (activeProject === 'warm-down-studio' ? 'activeProject' : '')} to='/React-Portfolio/projects/warm-down-studio'>
                            <p>Warm Down Studios</p>
                        </Link>
                    </div>
                </div>
                <div className="previewContainer">
                    <div className="permanentRoute">
                        <Route render={({location}) => (
                            <TransitionGroup>
                                <CSSTransition timeout={800} classNames='project' key={location.key}>
                                    <Switch location={location}>
                                        <Route path="/React-Portfolio/projects/memory-game"><MemoryGame /></Route>
                                        <Route path="/React-Portfolio/projects/travel-planner"><TravelPlanner /></Route>
                                        <Route path="/React-Portfolio/projects/warm-down-studio"><WarmDownStudio /></Route>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </div>
                </div>
            </Router>
            <div className="projectButtonContainer">
                <Link to='/React-Portfolio/experience' style={{ textDecoration: 'none' }}>
                    <div className="fadeButton fadeButtonProject bold" onClick={() => buttonClick('experience')}> My experience &gt; </div>
                </Link>
            </div>
        </div>
    );
}

export default Projects;