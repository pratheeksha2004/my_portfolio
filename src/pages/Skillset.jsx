import React from 'react';

// Programming & Scripting
import jsLogo from '../assets/logos/javascript.svg';
import javaLogo from '../assets/logos/java.svg';
import goLogo from '../assets/logos/golang.png';

// Frameworks & Libraries
import reactLogo from '../assets/logos/react.png';
import springBootLogo from '../assets/logos/springboot.png';
import sapui5Logo from '../assets/logos/sapui5.png';
import tailwindLogo from '../assets/logos/tailwindcss.png';

// Backend & Database

import postgresLogo from '../assets/logos/postgressql.png';
import elasticLogo from '../assets/logos/elasticsearch.png';

// Cloud & Platforms
import sapbtpLogo from '../assets/logos/sap-btp.jpg';

// Tools & DevOps
import gitLogo from '../assets/logos/git.png';
import githubLogo from '../assets/logos/github.svg';
import jiraLogo from '../assets/logos/jira.png';
import vscodeLogo from '../assets/logos/vscode.png';
import dockerLogo from '../assets/logos/docker.svg';
import postmanLogo from '../assets/logos/postman.svg';

import '../styles/Skillset.css';

const programmingSkills = [
  { name: 'Golang', logo: goLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'JavaScript', logo: jsLogo },
];

const frameworks = [
  { name: 'React', logo: reactLogo },
  { name: 'Spring Boot', logo: springBootLogo },
  { name: 'SAPUI5 / Fiori', logo: sapui5Logo },
  { name: 'TailwindCSS', logo: tailwindLogo },
];

const backendDb = [
 
  { name: 'PostgreSQL', logo: postgresLogo },
  { name: 'Elasticsearch', logo: elasticLogo },
];

const cloud = [
  { name: 'SAP BTP', logo: sapbtpLogo },
];

const tools = [
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'Jira', logo: jiraLogo },
  { name: 'VS Code', logo: vscodeLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Postman', logo: postmanLogo },
];

function Skillset() {
  return (
    <div className="container section">
      <h2 className="section-title">Skillset</h2>

      {/* Programming & Scripting */}
      <h3 className="subsection-title text-center mb-4">💻 Programming & Scripting</h3>
      <div className="row justify-content-center g-4 mb-5">
        {programmingSkills.map((skill) => (
          <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            </div>
          </div>
        ))}
      </div>

      {/* Frameworks & Libraries */}
      <h3 className="subsection-title text-center mb-4">🏗️ Frameworks & Libraries</h3>
      <div className="row justify-content-center g-4 mb-5">
        {frameworks.map((skill) => (
          <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            </div>
          </div>
        ))}
      </div>

      {/* Backend & Database */}
      <h3 className="subsection-title text-center mb-4">📡 Backend & Database</h3>
      <div className="row justify-content-center g-4 mb-5">
        {backendDb.map((skill) => (
          <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            </div>
          </div>
        ))}
      </div>

      {/* Cloud & Platforms */}
      <h3 className="subsection-title text-center mb-4">☁️ Cloud & Platforms</h3>
      <div className="row justify-content-center g-4 mb-5">
        {cloud.map((skill) => (
          <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            </div>
          </div>
        ))}
      </div>

      {/* Tools & DevOps */}
      <h3 className="subsection-title text-center mb-4">⚙️ Tools & DevOps</h3>
      <div className="row justify-content-center g-4 mb-5">
        {tools.map((tool) => (
          <div key={tool.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="skill-item">
              <img src={tool.logo} alt={`${tool.name} logo`} className="skill-logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillset;
