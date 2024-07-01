import React from 'react';
import './App.css';
import Roadmap from './components/roadmap';
import Home from './components/home';
import About from './components/about';
import ParticleBackground from './components/particleBackground';

import Cards from './components/cards';
import Fourth from './components/Fourth';
import Footer from './components/footer';



function App() {
  

  return (
    <>
    <Home/>
    <About/>
    <Cards/> 
    <Roadmap/>
    <Fourth/>
    <ParticleBackground/> 
    <Footer/>
    </>
  );
}

export default App;
