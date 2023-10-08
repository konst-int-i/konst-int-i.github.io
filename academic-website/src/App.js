import React from 'react';

import Particles from "react-tsparticles";
import { useCallback } from "react";
import particlesConfig from './particles-config.json';
import { loadSlim } from "tsparticles-slim"; 
import { particlesInit, particlesLoaded} from "./components/ParticlesUtils";



import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Section from './components/Section';
import './App.css';

function App() {
  const particlesInitCallback = useCallback(particlesInit, []);
  const particlesLoadedCallback = useCallback(particlesLoaded, []);

  return (
    <div className="app">
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        />
      <Navbar />
      <Landing />
      <Section title="Research Highlights" id="publications" componentType="publication" />
      <Section title="Teaching" id="teaching" componentType="teaching" />
      <Section title="Awards" id="awards" componentType="award" />
      {/* ... Other sections */}
    </div>
  );
}


export default App;
