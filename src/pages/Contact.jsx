import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To show sending status or success/error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Placeholder Submit Handler ---
  // Replace this with actual form submission logic (e.g., EmailJS, Formspree, Netlify Forms, custom backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...'); // Show feedback

    // ** SIMULATION - Replace this block **
    console.log('Form Data Submitted:', formData);
    setTimeout(() => {
      // Simulate success
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form

      // Simulate error (uncomment to test)
      // setStatus('Failed to send message. Please try again later.');

      // Clear status message after a few seconds
      setTimeout(() => setStatus(''), 5000);
    }, 1500); // Simulate network delay
    // ** End Simulation **

    /*
    // --- Example using Formspree (Requires setting up a Formspree endpoint) ---
    fetch('https://formspree.io/f/YOUR_FORM_ID', { // Replace YOUR_FORM_ID
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            setStatus(data["errors"].map(error => error["message"]).join(", "));
          } else {
            setStatus('Oops! There was a problem submitting your form');
          }
        })
      }
      setTimeout(() => setStatus(''), 5000); // Clear status
    })
    .catch(error => {
      setStatus('Oops! There was a problem submitting your form');
      setTimeout(() => setStatus(''), 5000); // Clear status
    });
    */
  };


  return (
    <div className="container section">
      <h2 className="section-title">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <p className="text-center mb-4" style={{ color: 'var(--text-secondary)' }}>
            Have a question or want to work together? Send me a message!
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-custom btn-lg" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {status && <p className="status-message text-center mt-3">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;