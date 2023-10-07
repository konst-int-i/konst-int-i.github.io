import React from 'react';
import profilePic from '../assets/konstantin-pic.jpg'; // replace with your picture's path
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import googleScholarIcon from '../assets/google-scholar.png';
import orcidIcon from '../assets/orcid.png';
import emailIcon from '../assets/email.png';



function Landing() {
  return (
    <section id="home" className="landing-section">
      <div className="landing-content">

        <div className="left-section">
          <img src={profilePic} alt="Konstantin Hemker" className="round-image"/>
          <h3 className="image-subheading">PhD Candidate</h3>
          <h3 className="image-subheading">Department of Computer Science</h3>
          <h3 className="image-subheading">University of Cambridge</h3>
          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://scholar.google.com/citations?user=youruserid" target="_blank" rel="noopener noreferrer">
                <img src={googleScholarIcon} alt="Google Scholar" className="social-icon" />
            </a>
            <a href="https://orcid.org/your-id" target="_blank" rel="noopener noreferrer">
                <img src={orcidIcon} alt="OrcID" className="social-icon" />
            </a>
          </div>
        </div>

        <div className="right-section">
          <h1 className="main-heading">Konstantin Hemker</h1>
          <h2 className="sub-heading">Multi-modal Machine Learning in Healthcare</h2>
        </div>

      </div>
    </section>
  );
}

export default Landing;


