import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import '../styles/Projects.css'; // For specific card styling

// --- Pratheeksha's Actual Project Data ---
const projectData = [
  {
    id: 1,
    title: 'Laptop Inventory Search Engine',
    description: 'Implemented full-text search and filtering for laptop inventory using the ELK stack. Ingested CSV data via Logstash, indexed in Elasticsearch, and visualized with Kibana. Tested API endpoints using Postman.',
    // imageUrl: '/path/to/project1-image.jpg', // Optional: Add screenshot
    githubUrl: 'https://github.com/pratheeksha2004/SearchingInsideDatasetUsingElasticSearch',
    tags: ['Spring Boot', 'Java', 'Elasticsearch', 'Logstash', 'Kibana', 'API', 'Data Ingestion']
  },
  {
    id: 2,
    title: 'E-commerce Full-Stack Application',
    description: 'A complete e-commerce platform featuring a user-friendly React frontend built with Vite & Tailwind CSS, connected to a robust Spring Boot backend using PostgreSQL for data persistence.',
    // imageUrl: '/path/to/project2-image.jpg', // Optional: Add screenshot
    githubUrl: 'https://github.com/pratheeksha2004/E-commerce-Full-Stack',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'Java', 'PostgreSQL', 'Full-Stack', 'API']
  },
  {
    id: 3,
    title: 'Netflix Clone (Frontend)',
    description: 'A frontend clone of the Netflix interface showcasing movie browsing and details fetched from the OMDB API. Built primarily with React and styled using Bootstrap for layout and components.',
    // imageUrl: '/path/to/project3-image.jpg', // Optional: Add screenshot
    githubUrl: 'https://github.com/pratheeksha2004/netflix-clone',
    tags: ['React', 'Bootstrap', 'JavaScript', 'API', 'Frontend', 'OMDB API']
  },
   {
    id: 4,
    title: 'SAP BTP Product List Application',
    description: 'Developed a SAP UI5 application in Business Application Studio (BAS) using MVC architecture and a JSON Model. Consumed the Northwind OData service, added filtering, and deployed to SAP BTP Cloud Foundry.',
    // imageUrl: '/path/to/project4-image.jpg', // Optional: Add screenshot
    githubUrl: 'https://github.com/pratheeksha2004/sap-btp-northwind-productlist-app',
    tags: ['SAP UI5', 'SAP BTP', 'OData', 'JSON Model', 'BAS', 'Cloud Foundry', 'MVC']
  },
  // Add more projects here if you have them
];
// --- End Project Data ---


function Projects() {
  return (
    <div className="container section">
      <h2 className="section-title">Projects</h2>
      <div className="row g-4 justify-content-center">
        {projectData.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card project-card h-100"> {/* Add h-100 for equal height cards */}
              {/* Optional Image */}
              {/* {project.imageUrl && <img src={project.imageUrl} className="card-img-top" alt={`${project.title} screenshot`} />} */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p> {/* flex-grow-1 pushes tags/button down */}

                {/* Project Tags */}
                {project.tags && project.tags.length > 0 && ( // Check if tags exist and array not empty
                    <div className="tags mb-3">
                        {project.tags.map(tag => (
                            // Use a more specific class for project tags if needed
                            <span key={tag} className="badge project-tag me-1 mb-1">{tag}</span>
                        ))}
                    </div>
                 )}

                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-custom mt-auto align-self-start" // mt-auto pushes button to bottom
                >
                  <FaGithub className="me-2" /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;