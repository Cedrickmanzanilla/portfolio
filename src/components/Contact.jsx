import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaEnvelope, FaWhatsapp, FaDiscord, FaLinkedin, FaBriefcase, FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'Cedrickmanzanilla04@gmail.com',
      href: 'mailto:Cedrickmanzanilla04@gmail.com',
      buttonText: 'Send Email'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+63 950 375 0983',
      href: 'https://wa.me/639503750983',
      buttonText: 'Message Me',
      isLink: true
    },
    {
      icon: FaDiscord,
      label: 'Discord',
      value: '@rzk27',
      href: 'https://discord.com/users/rzk27',
      buttonText: 'Connect on Discord',
      isLink: true,
      isSpan: true
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/manzanilla-cedrick-m-8140332a2/',
      buttonText: 'Visit Profile',
      isLink: true
    },
    {
      icon: FaBriefcase,
      label: 'OnlineJobs.ph',
      value: 'View My Profile',
      href: 'https://www.onlinejobs.ph/jobseekers/info/2966139',
      buttonText: 'Visit Profile',
      isLink: true
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 md:px-8 lg:px-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Let's Work Together
        </h2>
        <p className={`text-xl text-center mb-12 transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Open for freelance & remote work
        </p>

        <div className={`rounded-lg shadow-lg p-8 md:p-12 lg:p-16 transition-colors duration-300 ${
          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* First Row: Email, Discord, WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {contactItems.slice(0, 3).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-4 p-6 rounded-lg hover:opacity-90 transition-all border ${
                    isDark 
                      ? 'bg-gray-900 border-gray-700 hover:bg-gray-800' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-navy text-white p-3 rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.label}
                      </h3>
                      {item.isSpan ? (
                        <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.value}
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          target={item.isLink ? "_blank" : undefined}
                          rel={item.isLink ? "noopener noreferrer" : undefined}
                          className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                            isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-navy'
                          }`}
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                  <a
                    href={item.href}
                    target={item.isLink ? "_blank" : undefined}
                    rel={item.isLink ? "noopener noreferrer" : undefined}
                    className="w-full bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy-dark transform hover:scale-105 transition-all text-center"
                  >
                    {item.buttonText}
                  </a>
                </div>
              );
            })}
          </div>
          
          {/* Second Row: LinkedIn, OnlineJobs.ph */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.slice(3, 5).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index + 3}
                  className={`flex flex-col gap-4 p-6 rounded-lg hover:opacity-90 transition-all border ${
                    isDark 
                      ? 'bg-gray-900 border-gray-700 hover:bg-gray-800' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-navy text-white p-3 rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.label}
                      </h3>
                      {item.isSpan ? (
                        <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.value}
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          target={item.isLink ? "_blank" : undefined}
                          rel={item.isLink ? "noopener noreferrer" : undefined}
                          className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                            isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-navy'
                          }`}
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                  <a
                    href={item.href}
                    target={item.isLink ? "_blank" : undefined}
                    rel={item.isLink ? "noopener noreferrer" : undefined}
                    className="w-full bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy-dark transform hover:scale-105 transition-all text-center"
                  >
                    {item.buttonText}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
            isDark
              ? 'bg-navy text-white hover:bg-navy-dark'
              : 'bg-navy text-white hover:bg-navy-dark'
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </section>
  );
};

export default Contact;