import React, { useState } from 'react';
// import profilePic from '/assets/konstantin-pic.jpg'; // replace with your picture's path
// import profilePicPixel from '/assets/konstantin-pic-pixel.png';
// import pathologyPatch from '/assets/pathology_patch.png';
// import githubIcon from '/assets/github.png';
// import linkedinIcon from '/assets/linkedin.png';
// import googleScholarIcon from '/assets/google-scholar.png';
// import orcidIcon from '/assets/orcid.png';
// import emailIcon from '/assets/email.png';



function Landing() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="landing-section">
      <div className="landing-content">

        <div className="left-section">
          <div className="image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src={'/assets/konstantin-pic.jpg'}
              alt="profile"
              className={`round-image ${isHovered && 'hidden'}`}
            />
            <img 
              src={'/assets/pathology_patch.png'}
              alt="profile hover"
              className={`round-image ${!isHovered && 'hidden'}`}
            />
          </div>
          <h3 className="image-subheading">PhD Candidate</h3>
          <h3 className="image-subheading">Department of Computer Science</h3>
          <h3 className="image-subheading">University of Cambridge</h3>
          <div className="social-icons">
            <a href="https://github.com/konst-int-i" target="_blank" rel="noopener noreferrer">
                <img src={'/assets/github.png'} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/konstantin-hemker-b04250a6/" target="_blank" rel="noopener noreferrer">
                <img src={'/assets/linkedin.png'} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://twitter.com/konst_int_i" target="_blank" rel="noopener noreferrer">
                <img src={'/assets/twitter.png'} alt="twitter" className="social-icon" />
            </a>
            <a href="https://scholar.google.com/citations?user=SJVH3nIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <img src={'/assets/google-scholar.png'} alt="Google Scholar" className="social-icon" />
            </a>
            <a href="https://orcid.org/my-orcid?orcid=0009-0008-6414-0551" target="_blank" rel="noopener noreferrer">
                <img src={'/assets/orcid.png'} alt="OrcID" className="social-icon" />
            </a>
          </div>
        </div>

        <div className="right-section">
          <h1 className="main-heading">Konstantin Hemker</h1>
          <h2 className="sub-heading">Multi-modal Machine Learning on Biomedical Data</h2>
          <p className="description-text">
            I am a second-year PhD student in the <a href="https://www.cst.cam.ac.uk/">Computer Laboratory</a> at the University of Cambridge under the supervision of <a href="https://www.cl.cam.ac.uk/~mj201/">Prof Mateja Jamnik</a>. 
            My research is on Multi-Modal and Explainable Machine Learning on Biomedical Data, where I am interested in the following topics:
            <ul>
                <li>Multi-modal data fusion, especially looking at ways to improve early fusion models</li>
                <li>Explainability of multi-modal pipelines</li>
                <li>Looking at applications in digital pathology, radiology, spatial transcriptomics, and precision medicine</li>
                <li>Happy to explore any problem that deals with image, tabular, and graph data</li>
            </ul>
            I am very lucky to be funded by the <a href="https://www.gatescambridge.org/biography/18538/">Gates Cambridge Trust</a> to conduct this research and work with many great people in the department along the way.
        </p>

        </div>

      </div>
    </section>
  );
}

export default Landing;


