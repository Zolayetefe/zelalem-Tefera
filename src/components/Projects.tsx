import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import smartClinic from '../images/smart-clinic.png';
import pregnancyApp from '../images/pregnancy.png';
import Calculator from '../images/calculator.png';
import tictactoc from '../images/tic-tac-toc.png';
import jokeGenerator from '../images/joke-generator.png';
import secureNote from '../images/secureNoteApp.png'
import talenthub from '../images/talenthub.png'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'backend' |'flutter' | 'react' | 'frontend' | 'all';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Project['category']>('all');

  const filterLabels: Record<Project['category'], string> = {
    all: 'All Projects',
    backend: 'Backend Projects',
    react: 'React Projects',
    flutter: 'Flutter Projects',
    frontend: 'Frontend Projects',
  };

  const filterKeys: Project['category'][] = ['all', 'backend','flutter', 'react', 'frontend'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Web based Smart Clinic',
      description: 'A fully functional role based hospital management system for appointments and medical records.',
      image: smartClinic,
      tags: ['React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Zolayetefe/smart-clinic-frontend-',
      liveUrl: '',
      category: 'react',
    },
    {
      id: 2,
      title: 'Pregnancy And Childcare App',
      description: 'A comprehensive mobile application for tracking mothers healthy, provide health tips and community future with other utilities features.',
      image: pregnancyApp,
      tags: ['Flutter', 'Dart', 'Supabase', 'Provider'],
      githubUrl: 'https://github.com/ZeWuJb/ADDE-mother',
      liveUrl: '',
      category: 'flutter',
    },
    {
      id: 4,
      title: 'Joke Generator App',
      description: 'A funny mobile app that generates jokes when a smile is detected, or motivation otherwise.',
      image: jokeGenerator,
      tags: ['Flutter', 'Dart', 'google_mlkit_face_detection'],
      githubUrl: 'https://github.com',
      liveUrl: '',
      category: 'flutter',
    },
    {
      id: 5,
      title: 'Interactive Calculator',
      description: 'Web-based calculator with basic functionality.',
      image: Calculator,
      tags: ['Javascript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Zolayetefe/calculator',
      liveUrl: 'https://zolayetefe.github.io/calculator/',
      category: 'frontend',
    },
    {
      id: 6,
      title: 'Tic-Tac-Toe',
      description: 'A simple web-based Tic-Tac-Toe game built using HTML, CSS, and JavaScript.',
      image: tictactoc,
      tags: ['Javascript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Zolayetefe/tic_tac_toc',
      liveUrl: 'https://zolayetefe.github.io/tic_tac_toc/',
      category: 'frontend',
    },
    {
      id: 7,
      title: 'A Secure Note App Backend',
      description: 'A RESTful Note application backend built with Express.js, featuring JWT auth and CRUD endpoints.',
      image: secureNote,
      tags: ['Express.js', 'Node.js', 'JWT','Blowfish Algorithm', 'MongoDB'],
      githubUrl: 'https://github.com/Zolayetefe/secure-note-backend',
      liveUrl: '',
      category: 'backend',
    },
     {
    id: 8,
    title: 'Smart Clinic Backend',
    description: 'Backend for Smart Clinic built using Express.js, cookie based  authentication, Prisma ORM, and PostgreSQL.',
    image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Express.js', 'node.js', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/Zolayetefe/smart-clinic-back',
    liveUrl: '',
    category: 'backend',
  },
  {
    id: 9,
    title: 'Victory Contest Backend',
    description: 'Backend for a student contest platform built with FastAPI and Firebase.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['FastAPI', 'Firebase', 'Python'],
    githubUrl: 'https://github.com/Yosef64/victory-contest-backend',
    liveUrl: '',
    category: 'backend',
  },
  {
    "id": 10,
    "title": "TalentHub Frontend",
    "description": "A user-friendly interface for the TalentHub Job Portal that allows applicants to browse job listings, apply for jobs, and manage their profiles, while employers can post jobs and track applications.",
    "image": "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "tags": ["React", "Vite", "Tailwind CSS", "Vercel"],
    "githubUrl": "https://github.com/Zolayetefe/talenthub",
    "liveUrl": "https://talent-hub-weld.vercel.app/",
    "category": "react"
  },
  {
    "id": 11,
    "title": "TalentHub Backend",
    "description": "A robust backend service for the TalentHub Job Portal that manages authentication, job postings, applications, and user roles, ensuring secure and efficient interaction between employers and applicants.",
    "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "tags": ["Node.js", "Express", "MongoDB Atlas", "Render"],
    "githubUrl": "https://github.com/Zolayetefe/talenthub",
    "liveUrl": "https://talenthub-backend.onrender.com",
    "category": "backend"
  }
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  const getTagClasses = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('react')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (lower.includes('flutter')) return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
    if (lower.includes('express') || lower.includes('node')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
  };

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
            {filterKeys.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filterLabels[filter]}
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
                  <div className="p-6 w-full flex justify-end gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                   { project.liveUrl && <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 text-xs font-medium rounded-full ${getTagClasses(tag)}`}>
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
