import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Resume() {
  // Make sure to place the PDF inside the /public folder
  const resumeUrl = '/Pratheeksha_KN_Resume.pdf'; // Correct path if file is in /public
  const resumeFilename = 'Pratheeksha_Resume.pdf';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">My Resume</h2>
      <p className="text-gray-600 mb-6">
        Feel free to preview or download my resume for more details about my experience and qualifications.
      </p>

      {/* Resume Preview */}
      <div className="w-full h-[500px] border-2 border-gray-300 shadow-lg mb-6 rounded-lg overflow-hidden">
        <iframe
          src={resumeUrl}
          title="Resume Preview"
          width="100%"
          height="100%"
          className="rounded"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href={resumeUrl}
        download={resumeFilename}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
      >
        <FaDownload /> Download Resume
      </a>
    </div>
  );
}

export default Resume;
