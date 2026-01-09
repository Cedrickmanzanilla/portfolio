import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {
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
  
  const services = [
    {
      title: 'Web Development',
      description: 'Web & Mobile Apps, Full-Stack Systems',
      icon: '💻'
    },
    {
      title: 'Video Editing',
      description: 'UGC, Faceless Ads, VSLs, YouTube & Social Media',
      icon: '🎬'
    },
    {
      title: 'Scriptwriting',
      description: 'Engaging scripts for videos and content',
      icon: '✍️'
    },
    {
      title: 'Graphic Design',
      description: 'Creative visual designs and branding',
      icon: '🎨'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`py-24 px-6 md:px-8 lg:px-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 lg:p-10 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in border-2 border-transparent hover:border-navy ${
                isDark 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl lg:text-6xl mb-6">{service.icon}</div>
              <h3 className={`text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-navy-light' : 'text-navy'
              }`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;