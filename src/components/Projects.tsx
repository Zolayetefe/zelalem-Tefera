import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'react' | 'flutter' | 'all';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'react' | 'flutter'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce businesses with analytics, order management, and inventory tracking.',
      image: 'https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React', 'Redux', 'Tailwind CSS', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'react',
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'A mobile application for tracking workouts, nutrition, and personal fitness goals with social features.',
      image: 'https://images.pexels.com/photos/4098360/pexels-photo-4098360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'flutter',
    },
    {
      id: 3,
      title: 'Real Estate Platform',
      description: 'A web platform for property listings with advanced search, filtering, and user authentication.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'react',
    },
    {
      id: 4,
      title: 'Food Delivery App',
      description: 'A cross-platform mobile app for food ordering with real-time tracking and payment integration.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Flutter', 'Dart', 'RESTful API', 'Bloc'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'flutter',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {(['all', 'react', 'flutter'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter === 'react' ? 'React Projects' : 'Flutter Projects'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-end space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        tag.toLowerCase().includes('react')
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : tag.toLowerCase().includes('flutter')
                          ? 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;