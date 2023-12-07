import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import particlesConfig from './particles-config.json';
import { loadSlim } from "tsparticles-slim"; 
import { particlesInit, particlesLoaded} from "./components/ParticlesUtils";
import Publication from "./components/Publication";

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Section from './components/Section';
import './App.css';

function App() {
  const particlesInitCallback = useCallback(particlesInit, []);
  const particlesLoadedCallback = useCallback(particlesLoaded, []);

  return (
    <div className="app">
    {/*
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig} />
      */}
      <Navbar />
      <Landing />
      <div className="section-container">
        <h2 className='section-heading'> Research Highlights </h2>
        <Publication 
            teaserImage='/assets/cgx_overview.jpg' 
            title="CGXplain: Rule-Based Deep Neural Network Explanations Using Dual Linear Programs" 
            venue="ICLR 2023 Workshop on Trustworthy Machine Learning in Healthcare, Best Paper Award"
            codeLink="https://github.com/konst-int-i/cg_explain"
            paperLink="https://arxiv.org/pdf/2304.05207.pdf"
        />


        {/* <Section title="Research Highlights" id="publications" componentType="publication" /> */}
      </div>
      <div className="section-container">
        <h2 className="section-heading">Teaching</h2>
        
        <div className="subsection">
          <h3 className="subsection-heading">Master's projects</h3>
          <p className="subsection-text">
            I am currently co-supervising Master's students from the Part III in Computer Science Tripos and Advanced Computer Science MPhil
            on the following topics: 
            <ul> 
              <li> Hierarchical Computer Vision Models on Gigapixel-scale Biomedical Images </li>
              <li> Post-hoc Explainability for Intermediate Fusion Models in Cancer Medicine </li>
            </ul>
            These projects are co-supervised with Dr Nikola Simidjievski and Prof Mateja Jamnik. Please reach out if you are interested 
            in doing a Master's project in our research group. 
          </p>
        </div>

        <div className="subsection">
          <h3 className="subsection-heading">Teaching Assistance</h3>
          <p className="subsection-text">
            I am involved in teaching the following undergraduate and master's courses: 
            <ul>
              <li> <b>Multi-Modal Machine Learning</b> (2023-2024): Course author of submodule in R255 (Advanced topics in Machine Learning) course (Part III/MPhil) </li>
              <li> <b>Machine Learning and Real-World Data</b> (2023-2024): Teaching Assistant (Part IB) </li>
              <li> <b>Scientific Computing</b> (2023-2024): Teaching Assistant (Part IA) </li>
              <li> <b>Business Studies</b> (2023-2024): Teaching Assistant (Part II) </li>
            </ul>
          </p>
  </div>
</div>
      
      // <Section title="Teaching" id="teaching" componentType="teaching" />
      // <Section title="Awards" id="awards" componentType="award" />
      {/* ... Other sections */}
    </div>
  );
}


export default App;
