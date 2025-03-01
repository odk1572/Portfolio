import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Folder, Code2, Timer, Star } from 'lucide-react';

const projects = [
    {
      title: "LostLink - A lost and found items Portal (User Panel) ",
      description: "LostLink is a web-based Lost & Found portal that helps users report, search, and claim lost or found items with unique identity",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/odk1572/LostLink-",
      live: "https://lostlink.onrender.com"
    },
    {
      title: "LostLink - A lost and found items Portal (Admin Panel) ",
      description: "LostLink is a web-based Lost & Found portal that helps users report, search, and claim lost or found items with unique identity",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/odk1572/LostLink-AdminPanel",
      live: "https://lostlink-adminpanel.onrender.com"
    },
    {
      title: "PlaySync – A video streaming platform ",
      description: "PlaySync is a video streaming platform that allows to upload,watch and comment on videos with profile management and subscription features",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/odk1572/PlaySync",
      live: "https://playsync-1-7xxc.onrender.com"
    },
    {
      title: "EduPulse - E-learning platform ",
      description: "EduPulse is an E-learning platform that offers courses on various subjects with interactive quizzes and progress tracking",
      tech: ["React", "Node.js", "MongoDB", "Express","Stripe"],
      github: "https://github.com/odk1572/edupulse",
      live: "https://edupulse-m37g.onrender.com"
    },
    {
      title: "InstaVerse - A social media platform ",
      description: "InstaVerse is a social media platform that allows users to share posts, like, comment, and follow other users as well as chats",
      tech: ["React", "Node.js", "MongoDB", "Express","Socket.io"],
      github: "https://github.com/odk1572/instaverse",
      live: "https://instaverse-0jq1.onrender.com"
    },
    {
      title: "Blogify",
      description: "Blogify is a blog website where users can read, write, delete blogs. It also has a user authentication system.",
      tech: ["React.js", "Appwrite","Tailwind CSS"],
      github: "https://github.com/odk1572/Blogify-With-React",
      live: "https://blogify-with-react.vercel.app"
    },

  ];
const ProjectCard = ({ project, index, isVisible }) => {
  const baseAnimationClass = "transform transition-all duration-1000";
  const delay = `delay-${index * 200}`;

  return (
    <div
    className={`${baseAnimationClass} ${delay} ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    } transition-all duration-700 ease-out`}
  >
    <div
      className="bg-[#0A192F] rounded-lg p-6 h-full border border-[#64FFDA]/20 
                 hover:border-[#64FFDA] shadow-lg shadow-[#64FFDA]/10 
                 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 
                 group relative overflow-hidden"
    >
      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-[#64FFDA]/5 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl" />
  
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        {/* Folder Icon with Glow */}
        <div className="text-[#64FFDA] w-12 h-12 transform transition-transform group-hover:scale-110 duration-300">
          <Folder className="w-full h-full drop-shadow-[0_0_10px_#64FFDA]" />
        </div>
      </div>
  
      {/* Project Title */}
      <h3
        className="text-xl font-semibold text-white mb-2 
                   group-hover:text-[#64FFDA] transition-colors duration-300"
      >
        {project.title}
      </h3>
  
      {/* Description */}
      <p className="text-gray-400 mb-4 line-clamp-3 text-sm sm:text-base">
        {project.description}
      </p>
  
      {/* Tech Stack with Stylish Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 
                       rounded-full border border-[#64FFDA]/40 
                       transition-all duration-300 transform 
                       hover:scale-110 hover:border-[#64FFDA] hover:bg-[#64FFDA]/20"
          >
            {tech}
          </span>
        ))}
      </div>
  
      {/* Bottom Section with Links */}
      <div className="flex justify-between items-center border-t border-[#64FFDA]/20 pt-4">
        {/* GitHub Link */}
        <a
          href={project.github}
          className="flex items-center space-x-2 text-gray-400 hover:text-[#64FFDA] transition-colors duration-300 transform hover:scale-110"
        >
          <Github className="w-6 h-6 drop-shadow-[0_0_6px_#64FFDA]" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
  
        {/* Live Demo Link */}
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-400 hover:text-[#64FFDA] transition-colors duration-300 transform hover:scale-110"
        >
          <ExternalLink className="w-6 h-6 drop-shadow-[0_0_6px_#64FFDA]" />
          <span className="text-sm font-medium">Live Demo</span>
        </a>
      </div>
    </div>
  </div>
  
  );
};

const Projects = () => {
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

    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  // Sample project data - replace with your actual projects
 

  return (
    <div id="projects-section" className="min-h-screen bg-[#0a0f24] px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#64FFDA]/5 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#64FFDA]/10 rounded-full filter blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
          <div className="w-20 h-1 bg-[#64FFDA] rounded mb-12"></div>
        </div>

        {/* Featured Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;