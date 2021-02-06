import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {

  const [activeTab, setActiveTab] = useState('home');

  function handleNavClick(tabName) {
    setActiveTab(tabName);
  };

  return (
    <Router>
      <div className="blackBack">
        <Navbar activeTab={activeTab} handleClick={handleNavClick} />
        <Route render={({location}) => (
          <TransitionGroup>
          <CSSTransition timeout={800} classNames='item' key={location.key}>
            <Switch location={location}>
            <Route path='/Portfolio' exact><Home buttonClick={handleNavClick} /></Route>
            <Route path='/Portfolio/about'><About buttonClick={handleNavClick} /></Route>
            <Route path='/Portfolio/skills'><Skills buttonClick={handleNavClick} /></Route>
            <Route path='/Portfolio/projects'><Projects buttonClick={handleNavClick} /></Route>
            <Route path='/Portfolio/experience'><Experience buttonClick={handleNavClick} /></Route>
            <Route path='/Portfolio/contact'><Contact /></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
        )} />
      </div>
    </Router>
  );
}

export default App;
