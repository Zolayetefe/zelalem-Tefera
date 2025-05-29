import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, Database, Layout, Cpu, Globe } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  category: 'frontend' | 'mobile' | 'backend' | 'other';
}

const Skills: React.FC = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skills: Skill[] = [
    { name: 'Node.js', percentage: 95, icon: <Database size={20} />, category: 'backend' },
    { name: 'Git', percentage: 95, icon: <Cpu size={20} />, category: 'other' },
    { name: 'RESTful APIs', percentage: 95, icon: <Globe size={20} />, category: 'backend' },
    { name: 'React', percentage: 90, icon: <Code size={20} />, category: 'frontend' },
    { name: 'JavaScript/TypeScript', percentage: 90, icon: <Code size={20} />, category: 'frontend' },
    { name: 'CSS/SCSS', percentage: 85, icon: <Layout size={20} />, category: 'frontend' },
    { name: 'Flutter', percentage: 90, icon: <Smartphone size={20} />, category: 'mobile' },
    { name: 'Dart', percentage: 85, icon: <Code size={20} />, category: 'mobile' },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement;
            const width = progressBar.getAttribute('data-width');
            if (width) {
              progressBar.style.width = `${width}%`;
              progressBar.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Proficiency
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              With over 5 years of experience in software development, I've honed my skills
              across various technologies and platforms. My expertise spans from front-end web
              development with React to cross-platform mobile app development with Flutter.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">{skill.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      ref={(el) => (progressRefs.current[index] = el)}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out opacity-0"
                      style={{ width: '0%' }}
                      data-width={skill.percentage}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

   <div>
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
    Professional Experience
  </h3>
  <div className="space-y-8">
    <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 pb-8">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
      <h4 className="font-bold text-gray-900 dark:text-white text-xl">Backend Developer</h4>
      <p className="text-blue-600 dark:text-blue-400 mb-2">2024 - present</p>
      <p className="text-gray-700 dark:text-gray-300">
        Designed and implemented backend systems using Node.js and Express. Built RESTful APIs, managed MongoDB 
        databases, and ensured secure, scalable server-side architecture.
      </p>
    </div>

    <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 pb-8">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
      <h4 className="font-bold text-gray-900 dark:text-white text-xl">App Developer</h4>
      <p className="text-blue-600 dark:text-blue-400 mb-2">2023 - 2025</p>
      <p className="text-gray-700 dark:text-gray-300">
        Developed cross-platform mobile apps using Flutter and Dart. Integrated RESTful APIs, built custom widgets, 
        and implemented advanced state management with Provider and Bloc.
      </p>
    </div>

    <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
      <h4 className="font-bold text-gray-900 dark:text-white text-xl">Frontend Developer</h4>
      <p className="text-blue-600 dark:text-blue-400 mb-2">2021 - 2024</p>
      <p className="text-gray-700 dark:text-gray-300">
        Built and maintained modern, responsive frontend interfaces using React, TypeScript, and Tailwind CSS. 
        Focused on performance optimization, accessibility, and implementing state management with Redux and Context API.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Skills;