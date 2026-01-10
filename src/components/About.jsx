import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
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
  
  const tools = [
    'CapCut Pro',
    'DaVinci Resolve',
    'Canva & Photoshop',
    'ElevenLabs',
    'Minimax',
    'HeyGen',
    'ArcAds',
    'Envato',
    'Pexels',
    'Freepik',
    'Vecteezy',
    'Pixabay',
    'TikTok',
    'VMAKE',
    'VEO',
    'Frame.io',
    'Google Drive',
    'Dropbox',
    'WeTransfer',
    'Leonardo.ai'
  ];

  const sources = [
    'Pexels',
    'Pixabay',
    'Envato',
    'Freepik',
    'Vecteezy',
    'TikTok'
  ];

  const communicationTools = [
    'WhatsApp',
    'Discord',
    'LinkedIn',
    'Telegram',
    'Slack',
    'Asana'
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          About Me
        </h2>
        
        <div className={`rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 space-y-8 sm:space-y-10 md:space-y-12 animate-fade-in border transition-colors duration-300 ${
          isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {/* Main Introduction */}
          <div className="space-y-4">
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm <strong className="text-navy font-bold">Cedrick Manzanilla</strong>, a results-driven Video Editor with 3 years of experience creating high-performing UGC, VSL, ad creatives, and faceless videos for brands and creators worldwide.
            </p>
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I specialize in direct-response and short-form content designed to stop the scroll, hold attention, and convert. From TikTok, Instagram Reels, YouTube Shorts, to paid ads, I focus on strong hooks, clean pacing, storytelling, and audience retention — every video is built to perform, not just look good.
            </p>
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I've worked with global clients editing UGC-style ads, VSLs, faceless videos, compilations, and talking-head content, always aligning edits with platform-native best practices and brand goals.
            </p>
          </div>

          {/* What I Do Best */}
          <div className={`border-t pt-8 transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-navy'
            }`}>
              What I Do Best
            </h3>
            
            {/* Video Editing - Highest Priority */}
            <div className={`mb-8 p-6 rounded-lg border-2 transition-colors duration-300 ${
              isDark 
                ? 'bg-navy/20 border-navy/30' 
                : 'bg-navy/5 border-navy/20'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-navy text-white px-4 py-2 rounded-full text-sm font-bold">PRIMARY</span>
                <h4 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Video Editing
                </h4>
              </div>
              <ul className="grid md:grid-cols-2 gap-3 sm:gap-4 text-base sm:text-lg ml-2 sm:ml-4">
                {[
                  'UGC-style video editing (organic & ad-ready)',
                  'VSL & direct-response ad editing',
                  'Faceless videos (voiceover-driven, stock-based, AI-assisted)',
                  'Short-form content for TikTok, Reels, Shorts, and Facebook',
                  'Paid ad creatives for Meta, TikTok, and YouTube',
                  'Script structuring & optimization',
                  'Captions, subtitles, sound design, pacing, and visual flow',
                  'Stock footage & B-roll sourcing'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className={`w-6 h-6 mt-1 shrink-0 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-navy'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web & Mobile Development - High Priority */}
            <div className={`mb-8 p-6 rounded-lg border-2 transition-colors duration-300 ${
              isDark 
                ? 'bg-navy/20 border-navy/30' 
                : 'bg-navy/5 border-navy/20'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-navy-dark text-white px-4 py-2 rounded-full text-sm font-bold">SECONDARY</span>
                <h4 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Web & Mobile App Development
                </h4>
              </div>
              <ul className="grid md:grid-cols-2 gap-3 sm:gap-4 text-base sm:text-lg ml-2 sm:ml-4">
                {[
                  'Full-stack web applications',
                  'Mobile app development',
                  'React.js, Node.js, Express.js, MySQL, Tailwind CSS'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className={`w-6 h-6 mt-1 shrink-0 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-navy'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Skills - Balanced */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h5 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Scriptwriting
                </h5>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Engaging scripts for videos and content</p>
              </div>
              <div className={`p-4 rounded-lg border transition-colors duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h5 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Graphic Design
                </h5>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Creative visual designs and branding</p>
              </div>
            </div>

            {/* AI Specialist - Slightly Elevated */}
            <div className={`p-4 rounded-lg border transition-colors duration-300 ${
              isDark 
                ? 'bg-navy/20 border-navy/30' 
                : 'bg-navy/5 border-navy/20'
            }`}>
              <h5 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                AI Specialist
              </h5>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Proficient with multiple AI tools for content creation, voiceovers, and automation</p>
            </div>
          </div>

          {/* Tools I Use */}
          <div className={`border-t pt-8 transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-navy'
            }`}>
              Tools I Use
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-navy text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-navy-dark transform hover:scale-105 transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Sources I Use */}
          <div className={`border-t pt-8 transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-navy'
            }`}>
              Sources I Use
            </h3>
            <p className={`text-lg mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Platforms I use to find stock footage, video clips, assets, and creative resources:
            </p>
            <div className="flex flex-wrap gap-3">
              {sources.map((source, index) => (
                <span
                  key={index}
                  className={`px-5 py-2 rounded-full text-sm md:text-base font-medium hover:opacity-80 transform hover:scale-105 transition-all border ${
                    isDark 
                      ? 'bg-navy/50 text-white border-navy/30' 
                      : 'bg-navy/10 text-navy border-navy/20'
                  }`}
                >
                  {source}
                </span>
              ))}
            </div>
          </div>

          {/* Communication Tools */}
          <div className={`border-t pt-8 transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-navy'
            }`}>
              Communication Tools
            </h3>
            <p className={`text-lg mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Platforms I use for collaboration and communication:
            </p>
            <div className="flex flex-wrap gap-3">
              {communicationTools.map((tool, index) => (
                <span
                  key={index}
                  className={`px-5 py-2 rounded-full text-sm md:text-base font-medium hover:opacity-80 transform hover:scale-105 transition-all border ${
                    isDark 
                      ? 'bg-navy/50 text-white border-navy/30' 
                      : 'bg-navy/10 text-navy border-navy/20'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className={`border-t pt-8 transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I have a strong understanding of what works in today's content landscape — from testing hooks to improving watch time and conversions. My goal isn't just editing videos, but helping brands scale content that drives real results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;