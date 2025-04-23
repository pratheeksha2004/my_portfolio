import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Resume() {
  // --- IMPORTANT: Replace with the actual path to your resume in the public folder ---
  const resumeUrl = 'src\assets\Pratheeksha K N_4NM21IS111.pdf';
  const resumeFilename = 'Pratheeksha_Resume.pdf'; // The name the file will download as

  return (
    <div className="container section text-center">
      <h2 className="section-title">My Resume</h2>

      <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
        Feel free to download my resume for more details about my experience and qualifications.
      </p>

      {/* --- Download Button --- */}
      <a
        href={resumeUrl}
        download={resumeFilename} // This attribute triggers the download
        className="btn btn-custom btn-lg" // Larger button
        target="_blank" // Good practice to open PDF viewer in new tab if download fails
        rel="noopener noreferrer"
      >
        <FaDownload className="me-2" /> Download Resume
      </a>

      {/* --- Optional: Embed Resume Preview (Requires more setup/libraries) --- */}
      {/*
      <div className="resume-preview mt-5">
        <p style={{color: 'var(--text-secondary)'}}>Resume Preview:</p>
        // Using an iframe (basic, might have browser inconsistencies)
        <iframe
          src={`${resumeUrl}#view=FitH`} // Basic PDF viewer params
          width="100%"
          height="600px" // Adjust height
          style={{ border: `1px solid ${'var(--border-color)'}`, maxWidth: '800px', margin: '0 auto' }}
          title="Pratheeksha Resume Preview"
        >
           Your browser does not support embedded PDFs. Please <a href={resumeUrl} download={resumeFilename}>download the PDF</a> to view it.
        </iframe>

        // OR using a library like react-pdf (More robust but adds dependency)
        // You would need to install react-pdf and set it up
      </div>
      */}

    </div>
  );
}

export default Resume;