import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skillset from './pages/Skillset';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen'; // <--- IMPORT SplashScreen
import './App.css';

// --- Configuration ---
const SPLASH_DURATION = 4500; // Total time splash screen is visible (in milliseconds)
const FADE_OUT_START_DELAY = SPLASH_DURATION - 600; // Start fading out 600ms before removing

function App() {
  // State to control splash screen visibility
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  // State to trigger fade-out animation
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Timer to start the fade-out animation
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, FADE_OUT_START_DELAY);

    // Timer to completely hide the splash screen after fade-out
    const hideTimer = setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, SPLASH_DURATION);

    // Cleanup timers if the component unmounts early
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Router>
      {/* Conditionally render SplashScreen or the main App content */}
      {isSplashScreenVisible ? (
        <SplashScreen isFading={isFadingOut} />
      ) : (
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skillset" element={<Skillset />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;