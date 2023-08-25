import React from 'react';
import './footer.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'; // Importa el ícono de correo electrónico

const getCurrentYear = () => {
  return new Date().getFullYear();
};
function Footer() {
  return (
    <div className="footer">
        <div className="footer-links">
            <a href="https://www.linkedin.com/in/ornella-c%C3%B3pula/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/ornecop/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
            </a>
            <a href="mailto:orne_el38@hotmail.com" target="_blank" rel="noopener noreferrer">
            <FiMail size={24}/> 
            </a>     
            <p>© {getCurrentYear()} Ornella Copula. </p>
        </div>
    </div>
  );
}

export default Footer;
