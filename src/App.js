import { BrowserRouter } from 'react-router-dom';

import '../src/styles/style.css';
import Header from './components/header/header';
import About from './components/about/about';
import AboutIcons from './components/about-icons/about-icons';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header></Header>
          <About></About>
          <AboutIcons></AboutIcons>
          <Projects></Projects>
          <Skills></Skills>
          <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
