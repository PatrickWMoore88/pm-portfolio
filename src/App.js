import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <WorkHistory />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
