import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {

    const [navClick, setNavClick] = useState(false);

    const handleNavClick = () => {
        setNavClick(!navClick);
    }

    const handleBothNavClick = (tabName) => {
        props.handleClick(tabName);
        handleNavClick();
    }

    const navStyle = { textDecoration: 'none' };

    return (
        <nav>
            <Link onClick={() => handleBothNavClick('home')} style={{ textDecoration: 'none', color: 'black'}} to='/Portfolio'>
                <div className="logo">
                    <h1 className="logoText bold">WARREN</h1>
                </div>
            </Link>
            <div className="burgerIcon" onClick={handleNavClick}>
                <FontAwesomeIcon style={{color: 'white'}} icon={navClick ? faTimes : faBars} />
            </div>
            <ul className={navClick ? "navOptions activeNav" : "navOptions"}>
                <Link style={navStyle} onClick={() => handleBothNavClick('home')} className={(props.activeTab === 'home') ? 'active navOption' : 'notActive navOption'} to='/Portfolio'><li>HOME</li></Link>
                <Link style={navStyle} onClick={() => handleBothNavClick('about')} className={(props.activeTab === 'about') ? 'active navOption' : 'notActive navOption'} to='/Portfolio/about'><li>ABOUT</li></Link>
                <Link style={navStyle} onClick={() => handleBothNavClick('skills')} className={(props.activeTab === 'skills') ? 'active navOption' : 'notActive navOption'} to='/Portfolio/skills'><li>SKILLS</li></Link>
                <Link style={navStyle} onClick={() => handleBothNavClick('projects')} className={(props.activeTab === 'projects') ? 'active navOption' : 'notActive navOption'} to='/Portfolio/projects/memory-game'><li>PROJECTS</li></Link>
                <Link style={navStyle} onClick={() => handleBothNavClick('experience')} className={(props.activeTab === 'experience') ? 'active navOption' : 'notActive navOption'} to='/Portfolio/experience'><li>EXPERIENCE</li></Link>
                <Link style={navStyle} onClick={() => handleBothNavClick('contact')} className={(props.activeTab === 'contact') ? 'active navOption' : 'notActive navOption'} to='/Portfolio/contact'><li>CONTACT</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;
