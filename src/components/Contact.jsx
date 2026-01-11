import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaEnvelope, FaWhatsapp, FaDiscord, FaLinkedin, FaBriefcase, FaArrowUp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formStatus.message) {
      setFormStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address.' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      // Get them from https://www.emailjs.com/
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Prepare email parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact from Portfolio',
        message: formData.message,
        to_email: 'cedrickmanzanilla4@gmail.com'
      };

      // Try EmailJS first (if configured)
      if (serviceId !== 'YOUR_SERVICE_ID' && templateId !== 'YOUR_TEMPLATE_ID' && publicKey !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        
        setFormStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I will get back to you soon.' 
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to mailto if EmailJS not configured
        const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:cedrickmanzanilla4@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        setFormStatus({ 
          type: 'success', 
          message: 'Email client opened! Please send your message from there. If it did not open, please email me directly at cedrickmanzanilla4@gmail.com' 
        });
      }
      
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 8000);
      
    } catch (error) {
      console.error('Email error:', error);
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please email me directly at cedrickmanzanilla4@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
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
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'cedrickmanzanilla4@gmail.com',
      href: 'mailto:cedrickmanzanilla4@gmail.com',
      buttonText: 'Send Email',
      isLink: false,
      spanRows: 2,
      isEmail: true
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-16 md:py-24 px-2 sm:px-4 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="w-full max-w-full lg:max-w-[98%] mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Let's Work Together
        </h2>
        <p className={`text-lg sm:text-xl text-center mb-8 md:mb-12 px-4 transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Open for freelance & remote work
        </p>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className={`rounded-lg shadow-lg p-6 sm:p-8 md:p-12 transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Send me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy ${
                    isDark 
                      ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy ${
                    isDark 
                      ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy ${
                    isDark 
                      ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy resize-none ${
                    isDark 
                      ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {formStatus.message && (
                <div className={`p-4 rounded-lg ${
                  formStatus.type === 'error' 
                    ? 'bg-red-100 text-red-700 border border-red-300' 
                    : 'bg-green-100 text-green-700 border border-green-300'
                }`}>
                  <p className="text-sm">{formStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy text-white px-6 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-navy-dark transform hover:scale-110 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer active:scale-95"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Cards - Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Row 1: WhatsApp, Discord */}
            {contactItems.slice(0, 2).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg hover:opacity-90 transition-all border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-navy text-white p-2 sm:p-3 rounded-lg shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xs sm:text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.label}
                      </h3>
                      {item.isSpan ? (
                        <span className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 block truncate ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.value}
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          target={item.isLink ? "_blank" : undefined}
                          rel={item.isLink ? "noopener noreferrer" : undefined}
                          className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 block break-words ${
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
                    className="w-full bg-navy text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-navy-dark transform hover:scale-105 transition-all text-center text-xs sm:text-sm md:text-base"
                  >
                    {item.buttonText}
                  </a>
                </div>
              );
            })}
            
            {/* Row 2: LinkedIn, OnlineJobs.ph */}
            {contactItems.slice(2, 4).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index + 2}
                  className={`flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg hover:opacity-90 transition-all border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-navy text-white p-2 sm:p-3 rounded-lg shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xs sm:text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.label}
                      </h3>
                      <a
                        href={item.href}
                        target={item.isLink ? "_blank" : undefined}
                        rel={item.isLink ? "noopener noreferrer" : undefined}
                        className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 block break-words ${
                          isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-navy'
                        }`}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                  <a
                    href={item.href}
                    target={item.isLink ? "_blank" : undefined}
                    rel={item.isLink ? "noopener noreferrer" : undefined}
                    className="w-full bg-navy text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-navy-dark transform hover:scale-110 hover:shadow-xl transition-all duration-300 text-center text-xs sm:text-sm md:text-base cursor-pointer active:scale-95"
                  >
                    {item.buttonText}
                  </a>
                </div>
              );
            })}
            
            {/* Row 3: Email - Full width, horizontal layout */}
            {contactItems.slice(4).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index + 4}
                  className={`col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-lg hover:opacity-90 transition-all border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="bg-navy text-white p-3 sm:p-4 rounded-lg shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xs sm:text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.label}
                      </h3>
                      <a
                        href={item.href}
                        target={item.isLink ? "_blank" : undefined}
                        rel={item.isLink ? "noopener noreferrer" : undefined}
                        className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 block break-words mt-1 ${
                          isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-navy'
                        }`}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                  <a
                    href={item.href}
                    target={item.isLink ? "_blank" : undefined}
                    rel={item.isLink ? "noopener noreferrer" : undefined}
                    className="bg-navy text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg hover:bg-navy-dark transform hover:scale-110 hover:shadow-xl transition-all duration-300 text-center text-xs sm:text-sm md:text-base font-semibold flex items-center justify-center shrink-0 w-full sm:w-auto cursor-pointer active:scale-95"
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
          className={`fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-50 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
            isDark
              ? 'bg-navy text-white hover:bg-navy-dark'
              : 'bg-navy text-white hover:bg-navy-dark'
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </section>
  );
};

export default Contact;
