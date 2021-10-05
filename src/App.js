import React, { useState } from 'react';
import '../src/styles/style.css';
import Header from './components/header/header';
import About from './components/about/about';
import AboutIcons from './components/about-icons/about-icons';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';


const App = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <AboutIcons></AboutIcons>
      <Projects></Projects>
      <Skills></Skills>

    </>
  );
}

export default App;
