import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skillset from './pages/Skillset';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen'; // Make sure this uses your preferred splash style
import './App.css'; // Optional App-specific styles
import './index.css'; // Main global styles

// --- Configuration for Splash Screen ---
const SPLASH_ANIMATION_TIME = 3000; // Adjust based on your chosen splash animation
const FADE_OUT_DURATION = 800;
const SPLASH_DURATION = SPLASH_ANIMATION_TIME + FADE_OUT_DURATION;
const FADE_OUT_START_DELAY = SPLASH_ANIMATION_TIME;

// --- Code Snippets for Global Background ---
const backgroundCodeLines = [
  'TypeError: Cannot read property \'map\'',
  'const data = await fetchData();',
  'SyntaxError: Unexpected token <',
  ' optimizing build...',
  'useEffect(() => { cleanup }, []);',
  'git commit -m "feat: add feature"',
  'Exception in thread "main"...',
  'return <Component {...props} />;',
  'Initializing virtual DOM...',
  'while (true) { /* loop */ }',
  'Connecting to database...',
  'Segmentation fault (core dumped)',
  'async function process()',
  'Compiling shaders...',
  '{ loading: false, error: null }',
  'npm install --save-dev @types/node',
  'Running tests... 1 pass.',
  'SELECT * FROM users WHERE id = ?',
  'Refused to execute script...',
  'Promise.allSettled()',
];
// Adjust density as needed (e.g., 15-25)
const numberOfCodeLines = 20;

function App() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Splash screen timers
    const fadeTimer = setTimeout(() => setIsFadingOut(true), FADE_OUT_START_DELAY);
    const hideTimer = setTimeout(() => setIsSplashScreenVisible(false), SPLASH_DURATION);
    // Cleanup
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Run only once on mount

  return (
    <Router>
      {/* Conditionally render SplashScreen */}
      {isSplashScreenVisible && <SplashScreen isFading={isFadingOut} />}

      {/* Main App Container */}
      <div className="app-container">

        {/* === Global Background Elements (Grid Removed) === */}
        <div className="global-background-code">
          {[...Array(numberOfCodeLines)].map((_, i) => (
            <span
              key={`bg-code-${i}`}
              className="bg-code-line"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`, // Increased delay variation
                animationDuration: `${Math.random() * 10 + 15}s`, // Slower fall
                fontSize: `${Math.random() * 0.3 + 0.6}rem`, // Smaller font
                // --- Adjust Opacity As Needed ---
                color: `hsla(${160 + Math.random()*20}, 100%, ${80 + Math.random()*10}%, ${0.15 + Math.random()*0.15})`, // Example: Opacity 0.15-0.3
              }}
            >
              {backgroundCodeLines[Math.floor(Math.random() * backgroundCodeLines.length)]}
            </span>
          ))}
        </div>
        {/* --- GRID DIV REMOVED --- */}
        <div className="scanlines global-scanlines"></div> {/* Keep scanlines (optional) */}
        {/* === End Global Background Elements === */}

        {/* === Content Overlay for Readability === */}
        <div className="content-overlay"></div>
        {/* === End Content Overlay === */}


        {/* === Main App Structure (Rendered after splash) === */}
        {!isSplashScreenVisible && (
            <>
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skillset" element={<Skillset />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Optional: <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </main>
                <Footer />
            </>
        )}
        {/* === End Main App Structure === */}

      </div>
    </Router>
  );
}

export default App;