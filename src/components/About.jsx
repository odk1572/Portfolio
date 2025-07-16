import React, { useEffect, useState } from 'react';
import { Code, Database, Brain, Server, Layout } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: <Layout className="w-6 h-6" />, items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express.js'] },
    { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['MongoDB', 'MySQL'] },
    { name: 'Core CS', icon: <Brain className="w-6 h-6" />, items: ['DSA', 'OOP', 'OS','DBMS','C','Java'] },
    
  ];

  const animationBaseClass = "transform transition-all duration-1000";
  const visibleClass = "translate-y-0 opacity-100";
  const hiddenClass = "translate-y-10 opacity-0";

  return (
    <div id="about-section" className="min-h-screen bg-[#0a0f24] px-4 py-20 sm:px-6 lg:px-8 relative ">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#64FFDA]/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#64FFDA]/20 rounded-full filter blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className={`${animationBaseClass} ${isVisible ? visibleClass : hiddenClass}`}>
          <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-[#64FFDA] rounded mb-8"></div>
        </div>

        {/* Bio */}
        <div className={`${animationBaseClass} delay-300 ${isVisible ? visibleClass : hiddenClass}`}>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            I'm a passionate MERN Stack Developer with a strong foundation in Data Structures and Algorithms. 
            My journey in tech has equipped me with comprehensive skills in both frontend and backend development, 
            allowing me to create seamless, full-stack applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* Tech Stack */}
        <div className={`${animationBaseClass} delay-500 ${isVisible ? visibleClass : hiddenClass} mb-16`}>
          <h3 className="text-2xl font-semibold text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
              <div 
                key={tech}
                className="bg-[#112240] px-6 py-3 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA] 
                          transform hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-[#64FFDA] font-mono">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`${animationBaseClass} delay-700 ${isVisible ? visibleClass : hiddenClass}`}>
          <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-[#112240] p-6 rounded-xl border border-[#64FFDA]/20 
                          hover:border-[#64FFDA] transform hover:-translate-y-2 
                          transition-all duration-300 group"
              >
                <div className="flex items-center mb-4 text-[#64FFDA] group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                  <h4 className="text-lg font-semibold ml-2">{skill.name}</h4>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <p key={item} className="text-gray-400 hover:text-[#64FFDA] transition-colors duration-300">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`${animationBaseClass} delay-1000 mt-16 ${isVisible ? visibleClass : hiddenClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#112240] p-6 rounded-xl border border-[#64FFDA]/20 text-center">
              <h4 className="text-4xl font-bold text-[#64FFDA] mb-2">340+</h4>
              <p className="text-gray-400">DSA Problems Solved</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-xl border border-[#64FFDA]/20 text-center">
              <h4 className="text-4xl font-bold text-[#64FFDA] mb-2">4+</h4>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-[#112240] p-6 rounded-xl border border-[#64FFDA]/20 text-center">
              <h4 className="text-2xl font-bold text-[#64FFDA] mb-2">Fresher</h4>
              <p className="text-gray-400">Looking for Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
