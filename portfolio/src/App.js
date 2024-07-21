// src/App.js
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
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
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
