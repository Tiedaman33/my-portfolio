import React from 'react';
import './IntroSection.css';
import profileImage from '../assets/images/Bravo.jpg'; // Adjust the path to your profile image

function IntroSection() {
  return (
    <section id="intro">
      <div className="profile-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
      </div>
      <h1>My Portfolio</h1>
      <p>This is the link to my storyweaver project of an online library of <span>Afri<span>can</span> <span>Bo<span>oks</span></span></span></p>
      <button onClick={() => window.location.href='https://your-deployed-project-url.com'}>View Project</button>
    </section>
  );
}

export default IntroSection;
