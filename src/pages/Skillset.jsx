import React from 'react';
// Import your logos (adjust paths and names)
import jsLogo from '../assets/logos/javascript.svg';
import reactLogo from '../assets/logos/react.png';
//import nodeLogo from '../assets/logos/nodejs.svg';
import htmlLogo from '../assets/logos/html5.webp';
import cssLogo from '../assets/logos/CSS3.svg';
//import bootstrapLogo from '../assets/logos/bootstrap.svg';
// Tool Logos
import gitLogo from '../assets/logos/git.png';
import vscodeLogo from '../assets/logos/vscode.png';
import dockerLogo from '../assets/logos/docker.svg';
import postmanLogo from '../assets/logos/postman.svg';
// ... add all your logos

import '../styles/Skillset.css'; // For hover effects

const skills = [
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React', logo: reactLogo },
 
  { name: 'HTML5', logo: htmlLogo },
  { name: 'CSS3', logo: cssLogo },
  
  // Add more skills...
];

const tools = [
  { name: 'Git', logo: gitLogo },
  { name: 'VS Code', logo: vscodeLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Postman', logo: postmanLogo },
  // Add more tools...
];

function Skillset() {
  return (
    <div className="container section">
      <h2 className="section-title">Skillset</h2>

      {/* Technical Skills Section */}
      <h3 className="subsection-title text-center mb-4">Languages & Frameworks</h3>
      <div className="row justify-content-center g-4 mb-5">
        {skills.map((skill) => (
          <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
              {/* <p className="skill-name mt-2">{skill.name}</p> // Optional: Show name */}
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <h3 className="subsection-title text-center mb-4">Tools I Use</h3>
      <div className="row justify-content-center g-4">
        {tools.map((tool) => (
          <div key={tool.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="skill-item">
              <img src={tool.logo} alt={`${tool.name} logo`} className="skill-logo" />
               {/* <p className="skill-name mt-2">{tool.name}</p> // Optional: Show name */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillset;