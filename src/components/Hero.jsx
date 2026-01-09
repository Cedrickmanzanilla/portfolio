import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`min-h-screen flex items-center justify-center pt-24 px-6 md:px-8 lg:px-12 transition-colors duration-300 relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      {/* Video Background - Key prop forces re-render on theme change */}
      <div className="absolute inset-0 z-0">
        <video
          key={isDark ? 'dark-bg' : 'light-bg'}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-500"
        >
          <source src={isDark ? "/portfolio/plexus-background-technology-background-2025-12-09-13-12-27-utc.mp4" : "/portfolio/white-background-2025-12-09-07-05-41-utc.mp4"} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gray-900/50' : 'bg-white/50'}`}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Image Section - KEEP UNCHANGED */}
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
              <div className="absolute inset-0 bg-navy opacity-10 rounded-full blur-3xl transform scale-110"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-navy shadow-2xl">
                <img
                  src="/portfolio/ced-pic-portfolio.png"
                  alt="Cedrick Manzanilla - Video Editor & Web Developer"
                  className="w-100 h-125 object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-slide-up space-y-6">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm <span className="text-navy-light">Cedrick</span>
            </h1>
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-navy-light font-bold">Video Editor</span> | Web & Mobile Developer
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Creating high-performing UGC, Ads, VSL & Faceless videos that drive real results. 
              Also building modern web and mobile applications for brands and creators worldwide.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-navy text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-navy-dark transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/file/d/1g-7WTzVLQhnkJUx3AI_A-Jrp1H4N7yJw/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-10 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
                  isDark
                    ? 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700'
                    : 'bg-white text-navy border-2 border-navy hover:bg-gray-50'
                }`}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;