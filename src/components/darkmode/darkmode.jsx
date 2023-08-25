import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; 
import './darkmode.scss'; 

function DarkModeButton({ darkMode, onClick }) {
  return (
    <button className="darkmode-button" onClick={onClick}>
      {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
    </button>
  );
}

export default DarkModeButton;
