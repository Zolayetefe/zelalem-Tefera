import React from 'react';
import profile from "../images/profile.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img 
                src= {profile} 
                alt="Professional portrait"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600 dark:bg-purple-500 rounded-full z-[-1]"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Software Developer with passion for building exceptional digital experiences
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a software developer with a strong focus on creating 
              intuitive and dynamic user interfaces. With experience in backend dev using Express 
              React for web applications and Flutter for cross-platform mobile development, 
              I bring ideas to life through clean, efficient code and thoughtful design.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that not only meet but exceed client expectations. I'm constantly learning 
              and exploring new technologies to stay at the forefront of the ever-evolving 
              development landscape.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">Zelalem Tefera</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">zedoyetefe@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">From:</h4>
                <p className="text-gray-700 dark:text-gray-300">Bahir Dar, Ethiopia</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Availability:</h4>
                <p className="text-gray-700 dark:text-gray-300">Freelance / Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;