import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skillset from './pages/Skillset';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // <--- IMPORT THE FOOTER
import './App.css'; // Or index.css where app-container style might be

function App() {
  return (
    <Router>
      {/* This container helps push the footer down */}
      <div className="app-container">
        <Navbar />
        <main className="main-content"> {/* Ensure content flows below navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skillset" element={<Skillset />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optional: <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer /> {/* <--- ADD THE FOOTER COMPONENT HERE */}
      </div>
    </Router>
  );
}

export default App;