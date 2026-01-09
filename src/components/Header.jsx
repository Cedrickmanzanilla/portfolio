import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const sections = ['home', 'about', 'skills', 'portfolio', 'services', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Handle home section (at top)
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const getNavButtonClass = (sectionId) => {
    const isActive = activeSection === sectionId;
    const baseClass = 'transition-all duration-300 font-medium relative';
    
    if (isActive) {
      return `${baseClass} ${
        isDark 
          ? 'text-blue-400' 
          : 'text-yellow-300'
      } ${
        isDark 
          ? 'after:bg-blue-400' 
          : 'after:bg-yellow-300'
      } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:rounded-full`;
    }
    
    return `${baseClass} ${
      isDark ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-300'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark 
          ? isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900'
          : isScrolled ? 'bg-navy shadow-lg' : 'bg-navy'
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold transition-colors cursor-pointer ${
              isDark ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-300'
            }`}
          >
            Cedrick Manzanilla
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={getNavButtonClass('home')}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={getNavButtonClass('about')}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={getNavButtonClass('skills')}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={getNavButtonClass('portfolio')}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={getNavButtonClass('services')}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={getNavButtonClass('contact')}
            >
              Contact
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg transition-colors bg-white/20 hover:bg-white/30 text-white"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors bg-white/20 hover:bg-white/30 text-white"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 animate-fade-in">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left font-medium transition-colors capitalize ${
                  activeSection === section
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {section === 'home' ? 'Home' : section}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;