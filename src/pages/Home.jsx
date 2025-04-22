// src/pages/Home.jsx
// NO CHANGES NEEDED HERE - Keep the code exactly as you provided in the previous message.
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Home.css'; // Ensure this path is correct
import devIllustration from '../assets/logos/dev.webp'; // Make sure this path is correct

function Home() {
  return (
    <div id="home" className="container-fluid section home-section">
      <div className="container">
        {/* --- Hero Section Row --- */}
        <div className="row align-items-center justify-content-between min-vh-80">
          {/* Text Column */}
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start hero-text-content"> {/* Added class for animation target */}
            <p className="code-line code-comment mb-2">// Initialize Portfolio...</p>
            <p className="code-line code-comment mb-4">// Welcome to my digital space! 👋</p>
            <h1 className="name-tag mb-3">
               <span className="code-tag-name">&lt; Pratheeksha K N /&gt;</span> {/* Added back the <> */}
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
          <div className="col-lg-5 order-1 order-lg-2 text-center hero-image-content"> {/* Added class for animation target */}
            <img
              src={devIllustration}
              alt="Developer Illustration"
              className="developer-image img-fluid"
            />
          </div>
        </div>

        {/* === Introduction Section === */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div id="about" className="introduction">
              <h3 className='section-intro-title'>
                <span className="code-bracket">{'{'}</span> About Me <span className="code-bracket">{'}'}</span>
              </h3>
              {/* Paragraphs remain the same */}
              <p className="about-paragraph">
                Hi! I'm Pratheeksha, a passionate and curious developer driven by building meaningful digital experiences. I thrive on the challenge of solving problems and bringing ideas to life through code.
              </p>
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
              <p className="about-paragraph">
                I enjoy the entire development lifecycle, from designing user-friendly interfaces to crafting clean backend logic. My core interest lies in <strong className="highlight">full-stack development</strong>, especially building impactful <strong className="highlight">SaaS</strong> applications and exploring the potential of <strong className="highlight">search technology</strong>.
              </p>
               <p className="about-paragraph cta">
                 <span className="code-comment">// Let's connect and build something awesome!</span>
               </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-grid"></div>
      {/* Add Scanlines Div */}
      <div className="scanlines"></div>
    </div>
  );
}

export default Home;