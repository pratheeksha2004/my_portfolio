import React from 'react';
import '../styles/SplashScreen.css'; // <--- RENAME CSS IMPORT

// Accept isFading prop to trigger the fade-out animation
function SplashScreen({ isFading }) {
  // Array of common coding symbols for decoration
  const symbols = ['<>', '{}', '/>', '();', '[]', '::', '=>', '&&', '||', '#'];

  return (
    // Add the fade-out class conditionally
    <div className={`splash-screen-flashy ${isFading ? 'fade-out' : ''}`}>

      {/* Background elements for effects (optional) */}
      {/* <div className="splash-bg-glow"></div> */}
      {/* <div className="splash-bg-grid"></div> */}

      {/* Container for the main animation */}
      <div className="splash-content-flashy">

        {/* Animated code symbols appearing randomly */}
        {/* Generate a few symbol elements - adjust count as needed */}
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="splash-symbol"
            // Basic random positioning and delay via inline style
            // More complex randomness would need JS state/refs
            style={{
              top: `${Math.random() * 80 + 10}%`, // Random top (10-90%)
              left: `${Math.random() * 80 + 10}%`, // Random left (10-90%)
              fontSize: `${Math.random() * 1 + 0.8}em`, // Random size
              color: `var(--${['accent-light-blue', 'accent-purple', 'text-secondary'][Math.floor(Math.random() * 3)]})`, // Random color
              animationDelay: `${Math.random() * 1.5}s`, // Random start delay
              animationDuration: `${Math.random() * 1 + 1.5}s`, // Random duration
            }}
          >
            {symbols[Math.floor(Math.random() * symbols.length)]} {/* Random symbol */}
          </span>
        ))}

        {/* The main name tag reveal with glitch effect */}
        <div className="splash-name-container">
        <h1 className="splash-name-tag" data-text="<BringingIdeas.to(Life) />">
  <span className="splash-tag-name">&lt;BringingIdeas.to(Life) /&gt;</span>
</h1>


        </div>

        {/* Loading text or dots (optional) */}
         <div className="splash-loading-text">
            Loading assets<span className="dots">...</span>
         </div>

      </div>
    </div>
  );
}

export default SplashScreen;