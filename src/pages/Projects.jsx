import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import '../styles/Projects.css'; // For specific card styling

// --- Sample Project Data ---
// Replace with your actual projects
const projectData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This very portfolio website, built with React, Vite, and Bootstrap, featuring a galaxy theme and smooth animations.',
    // imageUrl: '/path/to/project1-image.jpg', // Optional: Add project images/screenshots
    githubUrl: 'https://github.com/yourusername/your-portfolio-repo', // Replace with your actual repo link
    tags: ['React', 'Vite', 'Bootstrap', 'CSS', 'JavaScript'] // Optional tags
  },
  {
    id: 2,
    title: 'E-commerce Backend API',
    description: 'A RESTful API for an e-commerce platform using Node.js, Express, and MongoDB. Includes features like user authentication, product management, and order processing.',
    // imageUrl: '/path/to/project2-image.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce-api-repo', // Replace
    tags: ['Node.js', 'Express', 'MongoDB', 'API', 'JWT']
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A simple web application for managing daily tasks. Built with React for the frontend and potentially Firebase or a simple backend for data persistence.',
    // imageUrl: '/path/to/project3-image.jpg',
    githubUrl: 'https://github.com/yourusername/task-app-repo', // Replace
    tags: ['React', 'JavaScript', 'Firebase', 'Frontend']
  },
  // Add more projects...
];
// --- End Sample Project Data ---


function Projects() {
  return (
    <div className="container section">
      <h2 className="section-title">Projects</h2>
      <div className="row g-4 justify-content-center">
        {projectData.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card project-card">
              {/* Optional Image */}
              {/* {project.imageUrl && <img src={project.imageUrl} className="card-img-top" alt={`${project.title} screenshot`} />} */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                {/* Optional: Project Tags */}
                 {project.tags && (
                    <div className="tags mb-3">
                        {project.tags.map(tag => (
                            <span key={tag} className="badge bg-secondary me-1">{tag}</span>
                        ))}
                    </div>
                 )}
                <a
                  href={project.githubUrl}
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="btn btn-custom mt-auto align-self-start" // Use custom button and align bottom-left
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