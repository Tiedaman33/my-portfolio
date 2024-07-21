// src/components/FeatureSection.js
import React from 'react';
import './FeatureSection.css';

const features = [
  {
    id: 1,
    imgSrc: `${process.env.PUBLIC_URL}/Feature1.png`, 
    description: 'Homepage',
  },
  {
    id: 2,
    imgSrc: `${process.env.PUBLIC_URL}/Feature2.png`,
    description: 'Login page',
  },
  {
    id: 3,
    imgSrc: `${process.env.PUBLIC_URL}/Feature3.png`,
    description: 'Sign up page',
  },
];

function FeatureSection() {
  return (
    <div className="feature-container">
      <section className="feature-section">
        {features.map(feature => (
          <div key={feature.id} className="feature">
            <img src={feature.imgSrc} alt={feature.description} />
            <h2>{feature.description}</h2>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FeatureSection;
