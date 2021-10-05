import React, { useState } from 'react';
import styled from 'styled-components';
import '../src/styles/style.css';
import Header from './components/header/header';
import About from './components/about/about';
import AboutIcons from './components/about-icons/about-icons';
import Projects from './components/projects/projects';


const App = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <AboutIcons></AboutIcons>
      <Projects></Projects>

    </>
  );
}

export default App;
