import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons
import '../styles/Footer.css'; // We'll create this CSS file next

function Footer() {
  // --- Replace with your actual URLs and Email ---
  const linkedinUrl = 'https://www.linkedin.com/in/pratheeksha-kn-74b307259/'; // Replace with your LinkedIn URL
  const githubUrl = 'https://github.com/pratheeksha2004'; // Replace with your GitHub URL
  const email = 'pratheeksharaju2004@gmail.com'; // Replace with your Gmail address
  // --- ---

  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-content text-center">

          {/* Social/Contact Links */}
          <div className="social-links mb-3">
            {linkedinUrl && ( // Only show if URL is provided
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn">
                <FaLinkedin />
              </a>
            )}
            {githubUrl && ( // Only show if URL is provided
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" title="GitHub">
                <FaGithub />
              </a>
            )}
            {email && ( // Only show if email is provided
              <a href={`mailto:${email}`} aria-label="Send Email" title="Email Me">
                <FaEnvelope />
              </a>
            )}
          </div>

          {/* Dedication Phrase */}
          <p className="dedication mb-2">
            Dedicated to creating impactful solutions!
          </p>

          {/* Copyright Notice */}
          <p className="copyright">
            Copyright © {currentYear} Pratheeksha P. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;