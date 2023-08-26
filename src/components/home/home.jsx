import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  DarkModeButton  from '../darkmode/darkmode';
import './home.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Home() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
      <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
        <nav className="navbar">
            <ul className='icon-container'>
                <div className='icon-box'>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> </Link>
                </div>
                <div className='icon-box'>
                    <Link to="/about"><FontAwesomeIcon icon={faUser} /> </Link>
                </div>
                <div className='icon-box'>
                    <Link to="/skills"><FontAwesomeIcon icon={faCogs} /> </Link>
                </div>
                <div className='icon-box'>
                   <Link to="/projects"><FontAwesomeIcon icon={faFolderOpen} /> </  Link>
                </div>
                <div className='icon-box'>
                   <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> </Link>
                </div>
                <div className='icon-box'>
                    <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode} />
                </div>
          </ul>
          
        </nav>
        <h1 className='name'>Ornella Copula</h1>
        <h3 className='name2'>Front end developer</h3>
      </div>
    );
  }
  
  export default Home;
  