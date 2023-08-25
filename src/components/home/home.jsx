import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  DarkModeButton  from '../darkmode/darkmode';
import './home.scss'; 

function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    const toggleMobileMenu = () => {
      setMobileMenuVisible(!isMobileMenuVisible);
    };
  
    return (
      <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
        <nav className="navbar">
          <div className="brand">ORNELLA</div>
          <div className="menu-icon" onClick={toggleMobileMenu}>
            ☰
          </div>
          <ul className={`navList ${isMobileMenuVisible ? 'hidden' : ''}`}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode} />
          </ul>
          <div className={`mobile-nav ${isMobileMenuVisible ? 'visible' : ''}`}>
            {/* Menú hamburguesa */}
            <ul className="mobile-nav-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode} />
            </ul>
          </div>
        </nav>
        <h1>Bienvenido a mi Portafolio</h1>
      </div>
    );
  }
  
  export default Home;
  