import React from 'react';
import { FaDownload } from 'react-icons/fa';
import '../styles/resume.css'; // Make sure to import your styles

function Resume() {
  const resumeUrl = '/My_new_resume.pdf';
  const resumeFilename = 'Pratheeksha_Resume.pdf';

  return (
    <section className="resume-section text-center px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">My Resume</h2>
      <p className="resume-lead-text text-gray-600 mb-10">
        Explore my journey, skills, and work. Preview or download my resume to know more.
      </p>

      {/* Resume Preview Container */}
      <div className="resume-preview-container">
        <iframe
          src={resumeUrl}
          title="Resume Preview"
          className="resume-iframe"
        ></iframe>
      </div>

      {/* Download Button */}
      <div className="resume-actions">
        <a
          href={resumeUrl}
          download={resumeFilename}
          target="_blank"
          rel="noopener noreferrer"
          className="download-button inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FaDownload className="text-xl" /> Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
