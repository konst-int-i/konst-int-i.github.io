import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div className="app">
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
