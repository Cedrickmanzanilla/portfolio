import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import VideoEditingPortfolio from './VideoEditingPortfolio';
import GraphicDesignPortfolio from './GraphicDesignPortfolio';
import videoEditingBg from '../assets/Pngs/Video Editing Background.jpg';
import graphicDesignBg from '../assets/Pngs/Graphic Designing.jpg';
import programmingBg from '../assets/Pngs/Programming.jpg';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('video-editing');
  const [showVideoPortfolio, setShowVideoPortfolio] = useState(false);
  const [showGraphicDesignPortfolio, setShowGraphicDesignPortfolio] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

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

  const categories = [
    {
      id: 'video-editing',
      title: 'Video Editing',
      status: 'active',
      description: 'UGC, VSL, Ads, Faceless Videos & more',
      image: videoEditingBg
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      status: 'active',
      description: 'Thumbnails, Graphics & Visual Designs',
      image: graphicDesignBg
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile App Development',
      status: 'coming-soon',
      description: 'Coming soon',
      image: programmingBg
    }
  ];

  const handleCategoryClick = (category) => {
    if (category.status === 'active') {
      if (category.id === 'video-editing') {
        setShowVideoPortfolio(true);
      } else if (category.id === 'graphic-design') {
        setShowGraphicDesignPortfolio(true);
      }
    }
  };

  // Expose function to scroll to portfolio section from header
  useEffect(() => {
    const handlePortfolioNav = () => {
      if (showVideoPortfolio || showGraphicDesignPortfolio) {
        // If viewing detail, go back to main portfolio view
        setShowVideoPortfolio(false);
        setShowGraphicDesignPortfolio(false);
        // Small delay to ensure state updates, then scroll
        setTimeout(() => {
          const element = document.getElementById('portfolio');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Listen for custom event from header
    window.addEventListener('scrollToPortfolio', handlePortfolioNav);
    return () => window.removeEventListener('scrollToPortfolio', handlePortfolioNav);
  }, [showVideoPortfolio, showGraphicDesignPortfolio]);

  if (showVideoPortfolio) {
    return <VideoEditingPortfolio onBack={() => setShowVideoPortfolio(false)} />;
  }

  if (showGraphicDesignPortfolio) {
    return <GraphicDesignPortfolio onBack={() => setShowGraphicDesignPortfolio(false)} />;
  }

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className={`py-16 sm:py-20 md:py-24 px-2 sm:px-4 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Portfolio
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`relative rounded-lg shadow-lg overflow-hidden transition-all duration-300 animate-fade-in cursor-pointer ${
                category.status === 'active'
                  ? isDark 
                    ? 'hover:shadow-2xl transform hover:scale-105 border border-navy/50 hover:border-navy'
                    : 'hover:shadow-2xl transform hover:scale-105 border border-navy/30 hover:border-navy'
                  : 'opacity-75'
              } ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for text readability - Enhanced for Light Mode */}
                <div className={`absolute inset-0 ${
                  isDark 
                    ? 'bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80' 
                    : 'bg-gradient-to-b from-navy/70 via-navy/60 to-navy/70'
                }`}></div>
                {/* Text with better visibility */}
                <span className={`absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-center px-4 z-10 drop-shadow-lg ${
                  isDark ? 'text-white' : 'text-white'
                }`}>
                  {category.title}
                </span>
              </div>
              <div className={`p-4 sm:p-6 md:p-8 transition-colors duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
                {category.status === 'active' ? (
                  <button className="bg-navy text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-navy-dark transform hover:scale-105 transition-all font-medium w-full text-sm sm:text-base">
                    View Portfolio
                  </button>
                ) : (
                  <div className="relative group">
                    <button className={`${
                      isDark ? 'bg-gray-600' : 'bg-gray-400'
                    } text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium w-full cursor-not-allowed text-sm sm:text-base`}>
                      Coming Soon
                    </button>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 ${
                      isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-800'
                    } text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                      Soon
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;