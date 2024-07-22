import React from 'react';
import './App.css';
import IntroSection from './components/IntroSection';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">Orina</div>
          <ul className="nav-links">
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <IntroSection />
        <FeatureSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
