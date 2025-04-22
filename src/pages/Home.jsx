import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Home.css'; // Ensure this path is correct
import devIllustration from '../assets/logos/dev.webp'; // Make sure this path is correct

function Home() {
  return (
    <div id="home" className="container-fluid section home-section">
      <div className="container">
        {/* --- Hero Section Row (Keep as is) --- */}
        <div className="row align-items-center justify-content-between min-vh-80">
          {/* Text Column */}
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            <p className="code-line code-comment mb-2">// Initialize Portfolio...</p>
            <p className="code-line code-comment mb-4">// Welcome to my digital space! 👋</p>
            <h1 className="name-tag mb-3">
              <span className="code-tag-name">Pratheeksha K N</span>
            </h1>
            <div className="role-declaration mb-4">
              <span className="code-keyword">const</span> <span className="code-variable">roles</span> = <span className="code-bracket">[</span>
              <TypeAnimation
                sequence={[
                  'Tech Enthusiast', 2000,
                  'Passionate Full Stack Developer', 2000,
                  'Problem Solver', 2000,
                  'Lifelong Learner', 2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="code-string"
              />
              <span className="code-bracket">];</span>
            </div>
            <p className="tagline mb-5">
              Building pixels and passion into web applications & digital experiences.
            </p>
          </div>
          {/* Image Column */}
          <div className="col-lg-5 order-1 order-lg-2 text-center">
            <img
              src={devIllustration}
              alt="Developer Illustration"
              className="developer-image img-fluid"
            />
          </div>
        </div>

        {/* === Introduction Section (REVISED STRUCTURE) === */}
        <div className="row justify-content-center"> {/* Center the intro content */}
          <div className="col-lg-10 col-xl-8"> {/* Control width */}
            <div id="about" className="introduction">
              <h3 className='section-intro-title'>
                <span className="code-bracket">{'{'}</span> About Me <span className="code-bracket">{'}'}</span>
              </h3>

              {/* Paragraph 1: Core Introduction */}
              <p className="about-paragraph">
                Hi! I'm Pratheeksha, a passionate and curious developer driven by building meaningful digital experiences. I thrive on the challenge of solving problems and bringing ideas to life through code.
              </p>

              {/* Paragraph 2: Current Focus & Tech Stack */}
              <p className="about-paragraph tech-focus">
                <span className="code-comment">// Current Stack & Learning</span><br />
                Actively honing my skills with hands-on experience in: <br />
                <span className="tech-tags-container">
                  <code className="tech-tag react">React</code>
                  <code className="tech-tag go">Golang</code>
                  <code className="tech-tag spring">Spring Boot</code>
                  <code className="tech-tag api">APIs</code>
                  <code className="tech-tag tailwind">Tailwind CSS</code>
                </span>
              </p>

              {/* Paragraph 3: Philosophy & Interests */}
              <p className="about-paragraph">
                I enjoy the entire development lifecycle, from designing user-friendly interfaces to crafting clean backend logic. My core interest lies in <strong className="highlight">full-stack development</strong>, especially building impactful <strong className="highlight">SaaS</strong> applications and exploring the potential of <strong className="highlight">search technology</strong>.
              </p>

               {/* Paragraph 4: Closing/Call to Action */}
               <p className="about-paragraph cta">
                 <span className="code-comment">// Let's connect and build something awesome!</span>
               </p>
               {/* Optional: Link to contact page */}
               {/* <div className="text-center mt-4">
                   <a href="/contact" className="btn btn-outline-accent">Get In Touch</a>
               </div> */}

            </div> {/* End .introduction */}
          </div> {/* End .col */}
        </div> {/* End Introduction Row */}

      </div> {/* End Inner Container */}
      <div className="background-grid"></div>
    </div> // End home-section container-fluid
  );
}

export default Home;