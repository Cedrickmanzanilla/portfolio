import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const VideoEditingPortfolio = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [videos, setVideos] = useState([]);
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ads', name: 'Ads' },
    { id: 'ugc', name: 'UGC' },
    { id: 'vsl', name: 'VSL' },
    { id: 'faceless', name: 'Faceless' }
  ];

  // Helper function to get embed URL from view URL
  const getEmbedUrl = (url) => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return null;
  };

  // Ads videos from Google Drive
  const adsVideos = [
    {
      name: 'Ads Example 1',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1f7ltL8g1i1Z6kXgyqgRNvhl9DTv73nc6/view'
    },
    {
      name: 'Ads Example 2',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1SBlUAE9BcfCjwv9zWt6SKQY01gKVx8cV/view'
    },
    {
      name: 'Ads Example 3',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1FoL3BpTxn9rIZPbYNU9nHTHOHSXMmzV4/view'
    },
    {
      name: 'Ads Example 4',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1YMeht35CS0XoCqVFWyukR_Ci2FZTweN1/view'
    },
    {
      name: 'Ads Example 5',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1Km_hiqNQNo8hWc9-_9sBR7G8bHsno01s/view'
    },
    {
      name: 'Ads Example 6',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1Jqy4fFvKqCBJwQuc0ueKan_6Sp9TJMsG/view'
    },
    {
      name: 'Ads Example 7',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1I9yFbXIu932Lyz5H-4MrWyG_nZn4EjSM/view'
    },
    {
      name: 'Ads Example 8',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1EMSs5YaIDatZjSgATUSErA0KUjkl5jgj/view'
    },
    {
      name: 'Ads Example 9',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1AvLE-BO2lpEVdiTey_Odj-WfdUapCSX0/view'
    },
    {
      name: 'Ads Example 10',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1Xn2ilj4OMPITH-nItlZeVP-Q61B3gZ9Q/view'
    },
    {
      name: 'Ads Example 11',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1UqkCRwDURoVMLYorri2RslZMkgeI3L-P/view'
    },
    {
      name: 'Ads Example 12',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1brzofuTUV3AKK0DB-budFMWl2tdmljMb/view'
    },
    {
      name: 'Ads Example 13',
      category: 'ads',
      url: 'https://drive.google.com/file/d/12OeNl-WUzx6WU5RF9nu9xn1fVh0CD_0d/view'
    },
    {
      name: 'Ads Example 14',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1R3rzLK9fDztqKu3rGvzn3kzf1g_20Hxa/view'
    },
    {
      name: 'Ads Example 15',
      category: 'ads',
      url: 'https://drive.google.com/file/d/1eKg0aDbxx69wv-_8Nq0ib8r9af6mH9y6/view'
    }
  ];

  // UGC videos from Google Drive
  const ugcVideos = [
    {
      name: 'UGC Example 1',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1L_yDPDQl3OUI_dByVUOoRVqInisMnMSp/view'
    },
    {
      name: 'UGC Example 2',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1AWgcz2z8w0lRUx3O8z72oaozCjK86FOc/view'
    },
    {
      name: 'UGC Example 3',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1nWmVYwRj87ccCEXB9WAdlB5C3P5xGkkZ/view'
    },
    {
      name: 'UGC Example 4',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1WqtqhR_hTZVHz_e-KoTKbJWdqi8mvOT5/view'
    },
    {
      name: 'UGC Example 5',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1amdoy_DIY_8F6stefBBJZtKRswtqyHyA/view'
    },
    {
      name: 'UGC Example 6',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1tyi3SI3nJaBobd1JzQdH3VZszir54LUV/view'
    },
    {
      name: 'UGC Example 7',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1OjKKsC-vJTK8tBwjglUWmQzIPVYQ3D3F/view'
    },
    {
      name: 'UGC Example 8',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1AyS9Y2h7oF_r_fnLpyr7XCsFCm28p9Iz/view'
    },
    {
      name: 'UGC Example 9',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1kzVbY9ew4l1Ts6BEXMN06q3Oa3Kie65q/view'
    },
    {
      name: 'UGC Example 10',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/18yDjejxTO2iWZLS_Tb3FFlK1QMkXDMz6/view'
    },
    {
      name: 'UGC Example 11',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1ubKplDazHCHpQ1qa6PVwYEEov3B-kPlD/view'
    },
    {
      name: 'UGC Example 12',
      category: 'ugc',
      url: 'https://drive.google.com/file/d/1t83CLgVjEkQCICbgliW48U8YOv4hRt3r/view'
    }
  ];

  // VSL videos from Google Drive
  const vslVideos = [
    {
      name: 'VSL Example 1',
      category: 'vsl',
      url: 'https://drive.google.com/file/d/1BccUuNLFFopVcPGxkAK-yQvpMqmzxTPe/view'
    },
    {
      name: 'VSL Example 2',
      category: 'vsl',
      url: 'https://drive.google.com/file/d/1DBEv3WlbVqugQ7EmmXWGqG6-3RpfNchQ/view'
    },
    {
      name: 'VSL Example 3',
      category: 'vsl',
      url: 'https://drive.google.com/file/d/1cUWinSLsfgycnmaBNra7T6Zb21NyQYbq/view'
    },
    {
      name: 'VSL Example 4',
      category: 'vsl',
      url: 'https://drive.google.com/file/d/18FhD0IAkkogSuFSNEApxTBo7Y7RTSvPN/view'
    },
    {
      name: 'VSL Example 5',
      category: 'vsl',
      url: 'https://drive.google.com/file/d/1jHtMmicoAiKi7GCoGhKrleGqQ2j0lO2j/view'
    },
    {
      name: 'VSL Example 6',
      category: 'vsl',
      url: 'https://drive.google.com/file/d/1Vy34eppdcC4sgBJx95BRjXjWQWyNSCnZ/view'
    }
  ];

  // Faceless videos from Google Drive
  const facelessVideos = [
    {
      name: 'Faceless Example 1',
      category: 'faceless',
      url: 'https://drive.google.com/file/d/1wfR7muxgSOC7j2uZ162P_Iy0eLCFXiQ4/view'
    },
    {
      name: 'Faceless Example 2',
      category: 'faceless',
      url: 'https://drive.google.com/file/d/1xB-UDMaOPW1QG7g5LZiWuRZFyJkWwKNu/view'
    },
    {
      name: 'Faceless Example 3',
      category: 'faceless',
      url: 'https://drive.google.com/file/d/1_60BC0N88CZs2xvcHJrd_LKkRBOY6rrf/view'
    },
    {
      name: 'Faceless Example 4',
      category: 'faceless',
      url: 'https://drive.google.com/file/d/1t97WGMT96ur03MM3CX7sdkIndpBVpiTy/view'
    },
    {
      name: 'Faceless Example 5',
      category: 'faceless',
      url: 'https://drive.google.com/file/d/1WLOmf73YJpOzmoiCbQAIrY9pV3OLi-5G/view'
    }
  ];

  const allVideos = [...adsVideos, ...ugcVideos, ...vslVideos, ...facelessVideos].map(video => ({
    ...video,
    embedUrl: getEmbedUrl(video.url)
  }));

  useEffect(() => {
    if (selectedCategory === 'all') {
      setVideos(allVideos);
    } else {
      setVideos(allVideos.filter(video => video.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getAspectRatio = (category) => {
    return category === 'faceless' ? 'aspect-video' : 'aspect-[9/16]';
  };

  // Generate staggered spacing for masonry layout
  // Simple pattern: alternate between videos with more top spacing and videos with less bottom spacing
  const getStaggeredSpacing = (index) => {
    // Simple 3-pattern cycle for consistent staggered effect
    if (index % 3 === 0) {
      return { top: '0', bottom: '1.5rem' };        // Normal: no extra top, normal bottom
    } else if (index % 3 === 1) {
      return { top: '3rem', bottom: '0.5rem' };     // High top, low bottom
    } else {
      return { top: '1rem', bottom: '2.5rem' };    // Low top, high bottom
    }
  };

  return (
    <section className={`min-h-screen py-24 px-6 md:px-8 lg:px-12 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className={`mb-6 font-semibold flex items-center gap-2 transition-colors duration-300 ${
              isDark ? 'text-navy-light hover:text-blue-400' : 'text-navy hover:text-navy-dark'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Video Editing Portfolio
          </h2>
          <p className={`text-xl mb-6 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            High-performing videos that drive results
          </p>
          
          {/* View All Examples Button */}
          <div className="mt-8">
            <a
              href="https://drive.google.com/drive/folders/1WTgknvjsLoo65CI_K-Dh1PypW5ciPUwV?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                isDark
                  ? 'bg-navy text-white hover:bg-navy-dark shadow-lg hover:shadow-xl'
                  : 'bg-navy text-white hover:bg-navy-dark shadow-lg hover:shadow-xl'
              } transform hover:scale-105`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View All My Example Work
            </a>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-navy text-white shadow-lg scale-105'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Masonry/Staggered Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {videos.map((video, index) => {
            const spacing = getStaggeredSpacing(index);
            return (
              <div
                key={index}
                className={`break-inside-avoid rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 animate-fade-in border ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  marginTop: spacing.top,
                  marginBottom: spacing.bottom
                }}
              >
                {/* Embedded Video */}
                <div className={`relative ${getAspectRatio(video.category)} bg-gray-900 overflow-hidden`}>
                  {video.embedUrl ? (
                    <iframe
                      src={video.embedUrl}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={video.name}
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    }`}>
                      <svg className={`w-16 h-16 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-6">
                  <div className="mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
                      video.category === 'ugc' 
                        ? isDark 
                          ? 'bg-blue-900/50 text-blue-200 border-blue-700/30' 
                          : 'bg-blue-100 text-blue-800 border-blue-200'
                        : video.category === 'vsl' 
                          ? isDark
                            ? 'bg-purple-900/50 text-purple-200 border-purple-700/30'
                            : 'bg-purple-100 text-purple-800 border-purple-200'
                          : video.category === 'ads' 
                            ? isDark
                              ? 'bg-green-900/50 text-green-200 border-green-700/30'
                              : 'bg-green-100 text-green-800 border-green-200'
                            : isDark
                              ? 'bg-orange-900/50 text-orange-200 border-orange-700/30'
                              : 'bg-orange-100 text-orange-800 border-orange-200'
                    }`}>
                      {video.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className={`text-base md:text-lg font-bold line-clamp-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {video.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {videos.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-xl transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              No videos found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoEditingPortfolio;