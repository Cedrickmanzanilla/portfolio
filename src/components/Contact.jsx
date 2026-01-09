import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      className={`py-24 px-6 md:px-8 lg:px-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="w-full max-w-4xl mx-auto">
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

        <div className={`rounded-lg shadow-lg p-8 md:p-12 lg:p-16 animate-fade-in transition-colors duration-300 ${
          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className="space-y-8">
            {/* Email */}
            <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-lg hover:opacity-90 transition-all border ${
              isDark 
                ? 'bg-gray-900 border-gray-700 hover:bg-gray-800' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}>
              <div className="flex items-center gap-4">
                <div className="bg-navy text-white p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Email
                  </h3>
                  <a
                    href="mailto:Cedrickmanzanilla04@gmail.com"
                    className="text-lg md:text-xl font-semibold text-navy-light hover:text-blue-400 transition-colors"
                  >
                    Cedrickmanzanilla04@gmail.com
                  </a>
                </div>
              </div>
              <a
                href="mailto:Cedrickmanzanilla04@gmail.com"
                className="ml-auto bg-navy text-white px-6 py-2 rounded-lg hover:bg-navy-dark transform hover:scale-105 transition-all"
              >
                Send Email
              </a>
            </div>

            {/* WhatsApp */}
            <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-lg hover:opacity-90 transition-all border ${
              isDark 
                ? 'bg-gray-900 border-gray-700 hover:bg-gray-800' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}>
              <div className="flex items-center gap-4">
                <div className="bg-navy text-white p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/639503750983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl font-semibold text-navy-light hover:text-blue-400 transition-colors"
                  >
                    +63 950 375 0983
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/639503750983"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto bg-navy text-white px-6 py-2 rounded-lg hover:bg-navy-dark transform hover:scale-105 transition-all"
              >
                Message Me
              </a>
            </div>

            {/* Discord */}
            <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-lg hover:opacity-90 transition-all border ${
              isDark 
                ? 'bg-gray-900 border-gray-700 hover:bg-gray-800' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}>
              <div className="flex items-center gap-4">
                <div className="bg-navy text-white p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <h3 className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Discord
                  </h3>
                  <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    isDark ? 'text-navy-light' : 'text-navy'
                  }`}>
                    @rzk27
                  </span>
                </div>
              </div>
              <a
                href="https://discord.com/users/rzk27"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto bg-navy text-white px-6 py-2 rounded-lg hover:bg-navy-dark transform hover:scale-105 transition-all"
              >
                Connect on Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;