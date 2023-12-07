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
            Text here
          </p>
        </div>

        <div className="subsection">
          <h3 className="subsection-heading">Teaching Assistance</h3>
          <p className="subsection-text">
            Text here
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
