import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedHeights, setAnimatedHeights] = useState({
    videoEditing: 0,
    webDev: 0,
    aiSpecialist: 0,
    scriptwriting: 0,
    graphicDesign: 0
  });
  const sectionRef = useRef(null);

  const prioritySkills = [
    {
      title: 'Video Editing',
      priority: 'primary',
      description: 'UGC, VSL, Ads, Faceless Videos & more',
      icon: '🎬',
      proficiency: 95 // Highest
    },
    {
      title: 'Web & Mobile Development',
      priority: 'secondary',
      description: 'React, Node.js, Express, MySQL & more',
      icon: '💻',
      proficiency: 75 // Second highest
    }
  ];

  const programmingLanguages = [
    { name: 'C#', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
    { name: 'Dart', icon: '🎯' },
    { name: 'Java', icon: '☕' },
    { name: 'PHP', icon: '🐘' },
    { name: 'SQL', icon: '🗄️' }
  ];

  const otherSkills = [
    { name: 'AI Specialist', priority: 'elevated', proficiency: 60 },
    { name: 'Scriptwriting', priority: 'normal', proficiency: 60 },
    { name: 'Graphic Design', priority: 'normal', proficiency: 60 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Animate bars from 0 to target height with staggered delays
            const targetHeights = {
              videoEditing: 95,
              webDev: 75,
              aiSpecialist: 60,
              scriptwriting: 60,
              graphicDesign: 60
            };

            // Set target heights with staggered delays for smooth animation
            Object.keys(targetHeights).forEach((key, index) => {
              setTimeout(() => {
                setAnimatedHeights((prev) => ({
                  ...prev,
                  [key]: targetHeights[key]
                }));
              }, index * 150); // Stagger animation by 150ms per bar
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-8 lg:px-12 bg-navy"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Skills
        </h2>

        {/* Skills Proficiency Graph */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Skills Proficiency
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 lg:p-12 border-2 border-white/20">
            <div className="flex items-end justify-center gap-3 md:gap-4 lg:gap-6 h-64 md:h-80 min-h-[256px]">
              {/* Video Editing - Highest */}
              <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 max-w-[100px] md:max-w-[120px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px]">
                  <div className={`absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs md:text-sm lg:text-base whitespace-nowrap z-10 transition-opacity duration-500 ${
                    animatedHeights.videoEditing > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    95%
                  </div>
                  <div 
                    className="w-full bg-gradient-to-t from-yellow-400 via-yellow-350 to-yellow-300 rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-yellow-200/50"
                    style={{ 
                      height: `${animatedHeights.videoEditing}%`, 
                      minHeight: `${(animatedHeights.videoEditing / 100) * 200}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-center leading-tight">Video Editing</span>
              </div>

              {/* Web & Mobile Development - Second */}
              <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 max-w-[100px] md:max-w-[120px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px]">
                  <div className={`absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs md:text-sm lg:text-base whitespace-nowrap z-10 transition-opacity duration-500 ${
                    animatedHeights.webDev > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    75%
                  </div>
                  <div 
                    className="w-full bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-blue-200/50"
                    style={{ 
                      height: `${animatedHeights.webDev}%`, 
                      minHeight: `${(animatedHeights.webDev / 100) * 200}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-center leading-tight">Web & Mobile Dev</span>
              </div>

              {/* AI Specialist - Equal */}
              <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 max-w-[100px] md:max-w-[120px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px]">
                  <div className={`absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs md:text-sm lg:text-base whitespace-nowrap z-10 transition-opacity duration-500 ${
                    animatedHeights.aiSpecialist > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    60%
                  </div>
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500 via-purple-400 to-purple-300 rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-purple-200/50"
                    style={{ 
                      height: `${animatedHeights.aiSpecialist}%`, 
                      minHeight: `${(animatedHeights.aiSpecialist / 100) * 200}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-center leading-tight">AI Specialist</span>
              </div>

              {/* Scriptwriting - Equal */}
              <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 max-w-[100px] md:max-w-[120px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px]">
                  <div className={`absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs md:text-sm lg:text-base whitespace-nowrap z-10 transition-opacity duration-500 ${
                    animatedHeights.scriptwriting > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    60%
                  </div>
                  <div 
                    className="w-full bg-gradient-to-t from-green-500 via-green-400 to-green-300 rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-green-200/50"
                    style={{ 
                      height: `${animatedHeights.scriptwriting}%`, 
                      minHeight: `${(animatedHeights.scriptwriting / 100) * 200}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-center leading-tight">Scriptwriting</span>
              </div>

              {/* Graphic Design - Equal */}
              <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 max-w-[100px] md:max-w-[120px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px]">
                  <div className={`absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs md:text-sm lg:text-base whitespace-nowrap z-10 transition-opacity duration-500 ${
                    animatedHeights.graphicDesign > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    60%
                  </div>
                  <div 
                    className="w-full bg-gradient-to-t from-pink-500 via-pink-400 to-pink-300 rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-pink-200/50"
                    style={{ 
                      height: `${animatedHeights.graphicDesign}%`, 
                      minHeight: `${(animatedHeights.graphicDesign / 100) * 200}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-center leading-tight">Graphic Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Skills */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {prioritySkills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 lg:p-10 text-center hover:bg-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in border-2 border-white/20 ${
                skill.priority === 'primary' ? 'lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                skill.priority === 'primary' 
                  ? 'bg-yellow-400 text-navy' 
                  : 'bg-blue-400 text-white'
              }`}>
                {skill.priority === 'primary' ? 'Primary Focus' : 'Secondary Focus'}
              </div>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className={`font-bold text-white mb-3 ${
                skill.priority === 'primary' 
                  ? 'text-3xl lg:text-4xl' 
                  : 'text-2xl lg:text-3xl'
              }`}>
                {skill.title}
              </h3>
              <p className="text-gray-200 text-lg">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
              >
                <div className="text-4xl mb-2">{lang.icon}</div>
                <h4 className="text-lg font-bold text-white">{lang.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherSkills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in border-2 border-white/20 ${
                skill.priority === 'elevated' ? 'lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <h3 className={`font-bold text-white ${
                skill.priority === 'elevated' ? 'text-2xl' : 'text-xl'
              }`}>
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;