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
      proficiency: 95
    },
    {
      title: 'Web & Mobile Development',
      priority: 'secondary',
      description: 'React, Node.js, Express, MySQL & more',
      icon: '💻',
      proficiency: 75
    }
  ];

  const programmingLanguages = [
    { name: 'C#' },
    { name: 'Python' },
    { name: 'Dart' },
    { name: 'Java' },
    { name: 'PHP' },
    { name: 'SQL' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            const targetHeights = {
              videoEditing: 95,
              webDev: 75,
              aiSpecialist: 60,
              scriptwriting: 60,
              graphicDesign: 60
            };

            Object.keys(targetHeights).forEach((key, index) => {
              setTimeout(() => {
                setAnimatedHeights((prev) => ({
                  ...prev,
                  [key]: targetHeights[key]
                }));
              }, index * 150);
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
      className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 bg-navy-dark"
    >
      <div className="w-full max-w-full lg:max-w-[98%] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-navy-light mb-8 sm:mb-12 md:mb-16">
          Skills
        </h2>

        {/* Skills Proficiency Graph */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-light text-center mb-6 sm:mb-8">
            Skills Proficiency
          </h3>
          <div className="bg-navy/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 border-2 border-navy-light/30 overflow-x-auto overflow-y-visible">
            <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-64 sm:h-80 md:h-96 lg:h-[28rem] min-h-[256px] sm:min-h-[320px] md:min-h-[384px] w-full relative">
              {/* Video Editing - Highest */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[180px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] pb-8 sm:pb-10 md:pb-12">
                  <div className={`absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 text-navy-light font-bold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap z-20 transition-opacity duration-500 ${
                    animatedHeights.videoEditing > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    95%
                  </div>
                  <div 
                    className="w-full bg-navy-light rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-navy-light/50"
                    style={{ 
                      height: `${animatedHeights.videoEditing}%`, 
                      minHeight: `${(animatedHeights.videoEditing / 100) * 250}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-navy-light font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base text-center leading-tight mt-2 whitespace-nowrap">Video Editing</span>
              </div>

              {/* Web & Mobile Development - Second */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[180px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] pb-8 sm:pb-10 md:pb-12">
                  <div className={`absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 text-navy-light font-bold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap z-20 transition-opacity duration-500 ${
                    animatedHeights.webDev > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    75%
                  </div>
                  <div 
                    className="w-full bg-navy-light rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-navy-light/50"
                    style={{ 
                      height: `${animatedHeights.webDev}%`, 
                      minHeight: `${(animatedHeights.webDev / 100) * 250}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-navy-light font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base text-center leading-tight mt-2">Web & Mobile Dev</span>
              </div>

              {/* AI Specialist - Equal */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[180px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] pb-8 sm:pb-10 md:pb-12">
                  <div className={`absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 text-navy-light font-bold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap z-20 transition-opacity duration-500 ${
                    animatedHeights.aiSpecialist > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    60%
                  </div>
                  <div 
                    className="w-full bg-navy-light rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-navy-light/50"
                    style={{ 
                      height: `${animatedHeights.aiSpecialist}%`, 
                      minHeight: `${(animatedHeights.aiSpecialist / 100) * 250}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-navy-light font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base text-center leading-tight mt-2">AI Specialist</span>
              </div>

              {/* Scriptwriting - Equal */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[180px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] pb-8 sm:pb-10 md:pb-12">
                  <div className={`absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 text-navy-light font-bold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap z-20 transition-opacity duration-500 ${
                    animatedHeights.scriptwriting > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    60%
                  </div>
                  <div 
                    className="w-full bg-navy-light rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-navy-light/50"
                    style={{ 
                      height: `${animatedHeights.scriptwriting}%`, 
                      minHeight: `${(animatedHeights.scriptwriting / 100) * 250}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-navy-light font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base text-center leading-tight mt-2">Scriptwriting</span>
              </div>

              {/* Graphic Design - Equal */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[180px]">
                <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] pb-8 sm:pb-10 md:pb-12">
                  <div className={`absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 text-navy-light font-bold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap z-20 transition-opacity duration-500 ${
                    animatedHeights.graphicDesign > 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    60%
                  </div>
                  <div 
                    className="w-full bg-navy-light rounded-t-lg transition-all duration-1000 ease-out hover:opacity-90 shadow-lg border-2 border-navy-light/50"
                    style={{ 
                      height: `${animatedHeights.graphicDesign}%`, 
                      minHeight: `${(animatedHeights.graphicDesign / 100) * 250}px`,
                      transformOrigin: 'bottom',
                      transition: 'height 1s ease-out, min-height 1s ease-out'
                    }}
                  ></div>
                </div>
                <span className="text-navy-light font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base text-center leading-tight mt-2">Graphic Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Skills */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {prioritySkills.map((skill, index) => (
            <div
              key={index}
              className="bg-navy/30 backdrop-blur-sm rounded-lg p-8 lg:p-10 text-center hover:bg-navy/40 transform hover:scale-105 transition-all duration-300 animate-fade-in border-2 border-navy-light/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                skill.priority === 'primary' 
                  ? 'bg-navy-light text-navy-dark' 
                  : 'bg-navy-light/20 text-navy-light'
              }`}>
                {skill.priority === 'primary' ? 'Primary Focus' : 'Secondary Focus'}
              </div>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className={`font-bold text-navy-light mb-3 ${
                skill.priority === 'primary' 
                  ? 'text-3xl lg:text-4xl' 
                  : 'text-2xl lg:text-3xl'
              }`}>
                {skill.title}
              </h3>
              <p className="text-navy-light/80 text-lg">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Programming Languages */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-navy-light text-center mb-4 sm:mb-6">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="bg-navy/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-navy/40 transform hover:scale-105 transition-all duration-300 border-2 border-navy-light/30"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-navy-light">{lang.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
