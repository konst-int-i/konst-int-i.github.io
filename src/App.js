import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particles-config.json';
import { particlesInit } from './components/ParticlesUtils';
import Publication from './components/Publication';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import useReducedMotion from './hooks/useReducedMotion';
import { publications } from './data/publications';
import './App.css';

export default function App() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      {!reducedMotion && <div className="particle-background" aria-hidden="true">
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
      </div>}
      <Navbar />
      <main id="main" tabIndex="-1">
        <Landing />
        <section className="section-container research-section" id="research" aria-labelledby="research-heading">
          <h2 id="research-heading">Research Highlights</h2>
          <div className="publications">
            {publications.map(publication => <Publication key={publication.id} {...publication} />)}
          </div>
        </section>
        <section className="section-container" id="teaching" aria-labelledby="teaching-heading">
          <h2 id="teaching-heading">Teaching</h2>
          <div className="prose">
            <h3>Master’s projects</h3>
            <p>At Cambridge, I co-supervised Master’s students from the Part III Computer Science Tripos and Advanced Computer Science MPhil on the following topics:</p>
            <ul>
              <li>Hierarchical Computer Vision Models on Gigapixel-scale Biomedical Images</li>
              <li>Post-hoc Explainability for Intermediate Fusion Models in Cancer Medicine</li>
            </ul>
            <p>These projects were co-supervised with Dr Nikola Simidjievski and Prof Mateja Jamnik.</p>
            <h3>Teaching assistance</h3>
            <p>I contributed to the following undergraduate and Master’s courses at Cambridge:</p>
            <ul>
              <li><strong>Multi-Modal Machine Learning</strong> (2023–2024): Course author of a submodule in R255 – Advanced Topics in Machine Learning (Part III/MPhil)</li>
              <li><strong>Machine Learning and Real-World Data</strong> (2023–2024): Teaching Assistant (Part IB)</li>
              <li><strong>Scientific Computing</strong> (2023–2024): Teaching Assistant (Part IA)</li>
            </ul>
          </div>
        </section>
        <section className="section-container" id="awards" aria-labelledby="awards-heading">
          <h2 id="awards-heading">Grants &amp; Awards</h2>
          <div className="prose">
            <ul>
              <li><strong>Gates Cambridge Scholarship</strong>: Full PhD scholarship awarded by the Gates Cambridge Trust.</li>
              <li><strong>Wiseman Prize</strong>: Awarded for “commendable contributions to the work of the department” in teaching, mentoring, and outreach.</li>
              <li><strong>Best Paper Award</strong>: ICLR 2023 Workshop on Trustworthy Machine Learning for Healthcare.</li>
              <li><strong>Best Paper Award</strong>: NeurIPS 2023 Workshop on Medical Imaging, for HEALNet.</li>
              <li><strong>G-Research PhD Grant</strong>: Research grant awarded to PhD researchers in quantitative fields.</li>
              <li><strong>Imperial College London Computing Award for Best Software Engineering Project</strong>: Best postgraduate group project in the department.</li>
            </ul>
          </div>
        </section>
        <section className="section-container" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About me</h2>
          <div className="prose">
            <p>I grew up in Hamburg, Germany, and moved to the UK after high school for my undergraduate degree at the London School of Economics. About a year into my time at LSE, I realised that I was more interested in mathematics and statistics than the economics aspects of my degree, which led me to study Computer Science on the side.</p>
            <p>I then did a Master’s in Computer Science at Imperial College London, exploring disciplines ranging from cybersecurity to natural language processing. I particularly enjoyed natural language processing and machine learning, and went on to work as a Senior Data Scientist at Boston Consulting Group.</p>
            <p>At BCG, I primarily worked on optimising pharmaceutical active ingredient production. Working with chemical engineers on pharmaceutical production sites sparked my interest in bioinformatics and led to my research on multimodal and explainable machine learning for spatial biology at Cambridge. I have also spent time at Flagship Pioneering and Microsoft Research.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
