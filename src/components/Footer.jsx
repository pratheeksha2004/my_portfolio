// src/components/Footer.jsx - CORRECT STRUCTURE
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const linkedinUrl = 'https://www.linkedin.com/in/pratheeksha-kn-74b307259/';
  const githubUrl = 'https://github.com/pratheeksha2004';
  const email = 'pratheeksharaju2004@gmail.com';
  const currentYear = new Date().getFullYear();

  return (
    // This footer element spans the full width because of CSS and its block nature
    <footer className="portfolio-footer">
      {/* This container adds padding and centers the content inside the footer */}
      <div className="container">
        <div className="footer-content text-center">

          {/* Social Links */}
          <div className="social-links mb-3">
            {/* ... links ... */}
             {linkedinUrl && ( <a href={linkedinUrl} /*...*/><FaLinkedin /></a> )}
             {githubUrl && ( <a href={githubUrl} /*...*/><FaGithub /></a> )}
             {email && ( <a href={`mailto:${email}`} /*...*/><FaEnvelope /></a> )}
          </div>

          {/* Creative Line */}
          <p className="code-footer-line mb-2">
             // Built with <span className="code-react">React</span> & <span className="code-heart">❤</span>️
             <span className="blinking-cursor">_</span>
          </p>

          {/* Dedication */}
          <p className="dedication mb-2">
            Dedicated to creating impactful solutions!
          </p>

          {/* Copyright */}
          <p className="copyright">
            Copyright © {currentYear} Pratheeksha K N. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;