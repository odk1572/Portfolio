import React, { useEffect, useState } from 'react';
import { BriefcaseIcon, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
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

    const expSection = document.getElementById('experience-section');
    if (expSection) {
      observer.observe(expSection);
    }

    return () => {
      if (expSection) {
        observer.unobserve(expSection);
      }
    };
  }, []);

  // Single data entry
  const data = {
    type: 'education',
    title: 'BE in Computer Engineering',
    organization: 'VVP Engineering College',
    duration: '2022 - 2026',
    location: 'Rajkot, Gujarat',
    description: 'Focused on Web Development, Data Structures, and Algorithms. Participated in coding competitions and hackathons.',
    skills: ['Data Structures', 'Algorithms', 'Web Development']
  };
  return (
    <div id="experience-section" className="min-h-screen bg-[#0A192F] px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#64FFDA]/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#64FFDA]/5 rounded-full filter blur-3xl animate-pulse delay-700" />
  
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-2">Experience & Education</h2>
          <div className="w-24 h-1 bg-[#64FFDA] rounded mb-16 mx-auto"></div>
        </div>
  
        {/* Experience & Education Cards */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-[#112240] p-6 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA]/80 transition-all duration-300 shadow-lg shadow-[#64FFDA]/10 relative">
            {/* Icon */}
            <div className="text-[#64FFDA] mb-4">
              {data.type === 'work' ? <BriefcaseIcon className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
            </div>
  
            {/* Title & Organization */}
            <h3 className="text-xl font-semibold text-white mb-1">{data.title}</h3>
            <h4 className="text-lg font-medium text-[#64FFDA]">{data.organization}</h4>
  
            {/* Duration & Location */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 my-3 text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-[#64FFDA]" />
                <span className="text-sm">{data.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-[#64FFDA]" />
                <span className="text-sm">{data.location}</span>
              </div>
            </div>
  
            {/* Description */}
            <p className="text-gray-400 mb-4">{data.description}</p>
  
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="text-sm text-[#64FFDA] bg-[#64FFDA]/20 px-3 py-1 rounded-full hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Experience;