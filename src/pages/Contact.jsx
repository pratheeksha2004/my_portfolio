import React, { useState } from 'react';
import '../styles/Contact.css'; // Assuming your CSS is here

// Helper function to encode form data for Netlify
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser submission
    setStatus({ text: 'Sending...', type: 'sending' });

    // Prepare data for Netlify AJAX submission
    const encodedData = encode({
      'form-name': 'contact', // Matches the 'name' attribute on the <form> tag
      ...formData
    });

    // Send data to Netlify
    fetch("/", { // Netlify handles POST requests to the root or current path for forms
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData
    })
      .then(() => {
        // Success!
        setStatus({ text: 'Message sent successfully! Thank you.', type: 'success' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
        // Clear status message after a few seconds
        setTimeout(() => setStatus({ text: '', type: '' }), 5000);
      })
      .catch(error => {
        // Error
        setStatus({ text: 'Oops! Something went wrong submitting the form.', type: 'error' });
        console.error("Form submission error:", error);
        // Clear status message after a few seconds
        setTimeout(() => setStatus({ text: '', type: '' }), 5000);
      });
  };


  return (
    <div className="container section contact-section" id="contact">
      <h2 className="section-title text-center mb-5">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-7">
          <p className="text-center mb-4 intro-text">
            Fill out the form below or reach out via email!
          </p>
          <div className="contact-form-wrapper">
            {/* --- NETLIFY FORM SETUP --- */}
            <form
              name="contact" // Unique name for the form
              method="POST"  // Method should be POST
              data-netlify="true" // Enable Netlify forms
              onSubmit={handleSubmit}
              className="contact-form"
              noValidate
            >
              {/* Hidden input required by Netlify for AJAX forms */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="mb-4">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name" // Name attribute is crucial for Netlify
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email" // Name attribute is crucial for Netlify
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message" // Name attribute is crucial for Netlify
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-custom btn-lg" disabled={status.type === 'sending'}>
                  {status.type === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status.text && (
                <p className={`status-message text-center mt-4 ${status.type}`}>
                  {status.text}
                </p>
              )}
            </form>
            {/* --- END NETLIFY FORM SETUP --- */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;