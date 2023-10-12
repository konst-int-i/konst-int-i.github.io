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
            teaserImage="path_to_image_1.jpg" 
            title="Title of Publication 1" 
            venue="Conference 1"
            codeLink="link_to_code_1"
            paperLink="link_to_paper_1"
        />


        {/* <Section title="Research Highlights" id="publications" componentType="publication" /> */}
      </div>
      
      <Section title="Teaching" id="teaching" componentType="teaching" />
      <Section title="Awards" id="awards" componentType="award" />
      {/* ... Other sections */}
    </div>
  );
}


export default App;
