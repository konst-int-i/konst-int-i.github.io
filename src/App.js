import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import particlesConfig from './particles-config.json';
import { loadSlim } from "tsparticles-slim"; 
import { particlesInit, particlesLoaded} from "./components/ParticlesUtils";
import PublicationElement from "./components/Publication";

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
        options={particlesConfig} />
      <Navbar />
      <Landing />
      <div className="section-container" id="research">
        <h2 className='section-heading'> Research Highlights </h2>
        <PublicationElement 
          teaserImage='/assets/healnet_overview.jpg'
          title="HEALNet: Hybrid Multi-Modal Fusion for Heterogeneous Biomedical Data"
          authors="Konstantin Hemker, Nikola Simidjievski, Mateja Jamnik"
          venue="NeurIPS 2023 Medical Imaging Workshop, Best Paper Award"
          codeLink="https://github.com/konst-int-i/healnet"
          paperLink="https://arxiv.org/pdf/2311.09115.pdf"
        />
        <PublicationElement
              teaserImage='/assets/cgx_overview.jpg'
              title="CGXplain: Rule-Based Deep Neural Network Explanations Using Dual Linear Programs"
              venue="ICLR 2023 Workshop on Trustworthy Machine Learning in Healthcare, Best Paper Award"
              authors="Konstantin Hemker, Zohreh Shams, Mateja Jamnik"
              codeLink="https://github.com/konst-int-i/cg_explain"
              paperLink="https://arxiv.org/pdf/2304.05207.pdf"
          />
        <PublicationElement
              teaserImage='/assets/SIR_paper_overview.jpg'
              title="Feature synergy, redundancy, and independence in global model explanations using shap vector decomposition"
              venue="White paper accompanying the Facet XAI package"
              authors="Jan Ittner, Lukasz Bolikowski, Konstantin Hemker, Ricardo Kennedy"
              codeLink="https://github.com/BCG-X-Official/facet"
              paperLink="https://arxiv.org/pdf/2107.12436.pdf"
          />
          <PublicationElement
              teaserImage='/assets/hate_speech_paper_overview.jpg'
              title="Augment to Prevent: Short-Text Data Augmentation in Deep Learning for Hate-Speech Classification"
              venue="CIKM 2019 Conference Proceedings"
              authors="Konstantin Hemker, Georgios Rizos, Bjoern Schuller"
              codeLink="https://github.com/konst-int-i/"
              paperLink="https://dl.acm.org/doi/abs/10.1145/3357384.3358040"
          />
      </div>
      <div className="section-container" id="teaching">
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
              <li> <b>Multi-Modal Machine Learning</b> (2023-2024): Course author of submodule in R255 - Advanced topics in Machine Learning (Part III/MPhil) </li>
              <li> <b>Machine Learning and Real-World Data</b> (2023-2024): Teaching Assistant (Part IB) </li>
              <li> <b>Scientific Computing</b> (2023-2024): Teaching Assistant (Part IA) </li>
              <li> <b>Business Studies</b> (2023-2024): Teaching Assistant (Part II) </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="section-container" id="awards">
        <h2 className="section-heading">Grants & Awards</h2>
          <div className="subsection">
            <p className="subsection-text">
              <ul>
                <li> <b>Gates Cambridge Scholarship</b>: Full PhD scholarship awarded by the Gates Cambridge Trust. </li>
                <li> <b>Wiseman Prize</b>: Winner of annual prize awarded for "commendable contributions to the work of the 
                department" in teaching, mentoring, and outreach activities. </li>
                <li> <b>Best Paper Award</b>: ICLR 2023 Workshop on Trustworthy Machine Learning for Healthcare. </li>
                <li> <b>Best Paper Award</b>: NeurIPS 2023 Workshop on Medical Imaging. </li>
                <li> <b>G-Research PhD Grant</b>: Awarded PhD Grant for researchers in quantitative fields. </li>
                <li> <b>Imperial College London Computing Award for Best Software Engineering Project</b>: Best postgraduate group project in the department. </li>
              </ul>
            </p>
          </div>
      </div>
      <div className="section-container" id="about">
        <h2 className="section-heading">About me</h2>
          <div className="subsection">
            <p className="subsection-text">
            I grew up in the beautiful city of Hamburg in Germany and moved to the UK after high school for 
            my undergraduate degree at the London School of Economics. About a year into my time at LSE, I 
            realised that I was more interested in mathematics & statistics than the economics aspects of my 
            degree, which eventually led me to self-educate myself in Computer Science on the side. I then 
            did a Master's in Computer Science at Imperial College London, where I focussed on various disciplines 
            ranging from Cybersecurity to Natural Language Processing. I really enjoyed Natural Language Processing 
            and Machine Learning more generally and started working as a Senior Data Scientist for the Boston 
            Consulting Group for a few years. At BCG, I primarily worked on drug yield optimisation of Pharmaceutical 
            API production as well as various other interesting modelling challenges in the pharmaceutical industry, 
            travel & tourism industry, the public sector, and even the dating app market. Working alongside chemical 
            engineers on pharma production sites originally piqued my interest in bioinformatics and my current research 
            is an evolution of this (after many, many iterations). 
            </p>
          </div>
      </div>  
    </div> // <-- This closes the "app" div
  ); // <-- This closes the return statement
} // <-- This closes the App function


export default App;
