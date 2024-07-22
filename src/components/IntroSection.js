import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <section id="intro">
      <div className="profile-container">
        <img className="profile-image" src={`${process.env.PUBLIC_URL}/Bravo.jpg`} alt="Profile" />
      </div>
      <h1>Bravin Orina</h1>
      <p>This is the link to my storyweaver project of an online library of <span>Afri<span>can</span> <span>Bo<span>oks</span></span></span></p>
      <button onClick={() => window.location.href='https://your-deployed-project-url.com'}>View Project</button>
    </section>
  );
}

export default IntroSection;
