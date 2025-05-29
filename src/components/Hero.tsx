import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = ['React Developer', 'Flutter Developer', 'Express.js Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at the end of typing
        isDeleting = true;
        typingSpeed = 1000; // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 300; // Pause before typing new word
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 overflow-hidden">
            <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 transform translate-y-0 opacity-100 transition-all duration-700 ease-out">
              Hello, I'm
            </h2>
          </div>
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white transform translate-y-0 opacity-100 transition-all duration-700 ease-out delay-100">
              Zelalem Tefera
            </h1>
          </div>
          <div className="mb-8 overflow-hidden">
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 h-8">
              I'm a <span ref={textRef} className="typing"></span>
            </h2>
          </div>
          <div className="mb-12 overflow-hidden max-w-2xl">
            <p className="text-gray-700 dark:text-gray-300 transform translate-y-0 opacity-100 transition-all duration-700 ease-out delay-300">
              Passionate about creating beautiful, functional applications that solve real problems.
              Specializing in backend dev, React for web and Flutter for cross-platform mobile development.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-medium transition-all transform hover:scale-105 duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;