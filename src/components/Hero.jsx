import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-24 px-6 md:px-8 lg:px-12 transition-colors duration-300 relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Background Icons - Subtle decorative elements */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        {/* Video Editing Icons */}
        <div className="absolute top-20 left-10 md:left-20 w-16 h-16 md:w-20 md:h-20">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-full h-full ${isDark ? 'text-navy-light' : 'text-navy'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        {/* Code/Development Icon */}
        <div className="absolute top-40 right-10 md:right-20 w-12 h-12 md:w-16 md:h-16">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-full h-full ${isDark ? 'text-navy-light' : 'text-navy'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>

        {/* Film/Video Icon */}
        <div className="absolute bottom-40 left-20 md:left-32 w-14 h-14 md:w-16 md:h-16">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-full h-full ${isDark ? 'text-navy-light' : 'text-navy'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Graph/Chart Icon */}
        <div className="absolute top-60 right-32 md:right-48 w-10 h-10 md:w-14 md:h-14">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-full h-full ${isDark ? 'text-navy-light' : 'text-navy'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>

        {/* Tools/Wrench Icon */}
        <div className="absolute bottom-60 right-20 md:right-40 w-12 h-12 md:w-16 md:h-16">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-full h-full ${isDark ? 'text-navy-light' : 'text-navy'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* AI/Brain Icon */}
        <div className="absolute top-32 left-1/3 w-10 h-10 md:w-14 md:h-14">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-full h-full ${isDark ? 'text-navy-light' : 'text-navy'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>

        {/* Mobile/Device Icon */}
        <div className="absolute bottom-32 left-1/4 w-12 h-12 md:w-16 md:h-16">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-full h-full ${isDark ? 'text-navy-light' : 'text-navy'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Image Section - KEEP UNCHANGED */}
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
              <div className="absolute inset-0 bg-navy opacity-10 rounded-full blur-3xl transform scale-110"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-navy shadow-2xl">
                <img
                  src="/ced-pic-portfolio.png"
                  alt="Cedrick Manzanilla - Video Editor & Web Developer"
                  className="w-105 h-125 object-cover object-center"
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