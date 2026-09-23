import React, { useState } from 'react';
import portrait from '../assets/konstantin-linkedin.jpg';
import pathology from '../assets/pathology_patch.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import scholar from '../assets/google-scholar.png';
import orcid from '../assets/orcid.png';

const profiles = [
  { name: 'GitHub', href: 'https://github.com/konst-int-i', image: github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/konstantin-hemker-b04250a6/', image: linkedin },
  { name: 'Twitter', href: 'https://twitter.com/konst_int_i', image: twitter },
  { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=SJVH3nIAAAAJ&hl=en', image: scholar },
  { name: 'ORCID', href: 'https://orcid.org/0009-0008-6414-0551', image: orcid },
];

export default function Landing() {
  const [showPathology, setShowPathology] = useState(false);

  return (
    <section id="home" className="landing-section" aria-labelledby="name">
      <div className="landing-content">
        <div className="profile-section">
          <button
            type="button"
            className="image-container"
            aria-label="Toggle pathology image"
            aria-pressed={showPathology}
            onClick={() => setShowPathology(value => !value)}
          >
            <img src={portrait} alt="Konstantin Hemker" className="round-image portrait" width="800" height="800" />
            <img src={pathology} alt="Histopathology tissue sample" className="round-image pathology" width="800" height="800" />
          </button>
          <p className="image-subheading">Life Sciences at OpenAI</p>
          <div className="social-icons" aria-label="Professional profiles">
            {profiles.map(({ name, href, image }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`}>
                <img src={image} alt="" className="social-icon" width="36" height="36" />
              </a>
            ))}
          </div>
        </div>
        <div className="intro-text">
          <h1 id="name">Konstantin Hemker</h1>
          <p className="sub-heading">AI x Life Sciences</p>
          <div className="description-text">
            <p>I work on the Life Sciences team at OpenAI to accelerate work in biology, chemistry, and drug discovery &amp; development more broadly.</p>
            <p>Previously, I researched multimodal and explainable machine learning for spatial biology at the <a href="https://www.cst.cam.ac.uk/">University of Cambridge</a>, supported by the Gates Cambridge Trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
