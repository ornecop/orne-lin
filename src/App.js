//import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
