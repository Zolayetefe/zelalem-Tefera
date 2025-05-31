import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useThemeMode from './hooks/useThemeMode';

function App() {
  const [isDarkMode, toggleTheme] = useThemeMode();

  useEffect(() => {
    // Update page title
    document.title = 'Zelalem Tefera | Software Developer';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;