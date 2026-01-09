# Ced's Portfolio Website

A professional personal portfolio website built with React, Vite, Tailwind CSS, and Node.js/Express.

## Features

- 🎨 Clean and modern design with white background and navy blue accents
- 📱 Fully responsive (desktop + mobile)
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- 🎯 All sections: Hero, About, Skills, Portfolio, Services, Blog, and Footer

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Inter & Poppins fonts

### Backend
- Node.js
- Express
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Frontend Dependencies**
   ```bash
   cd "Portfolio/Cedrick Portfolio"
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd ../../backend
   npm install
   ```

### Running the Application

1. **Start the Backend Server** (Terminal 1)
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:5000
   ```

2. **Start the Frontend Development Server** (Terminal 2)
   ```bash
   cd "Portfolio/Cedrick Portfolio"
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

3. Open your browser and visit `http://localhost:5173`

## Project Structure

```
Portfolio/Cedrick Portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── ced-pic-portfolio.png
└── package.json

backend/
├── server.js
└── package.json
```

## Customization

- Update social media links in `src/components/Footer.jsx`
- Modify project data in `src/components/Portfolio.jsx` or via the API
- Update blog posts in `src/components/Blog.jsx` or via the API
- Change colors in `tailwind.config.js`

## Build for Production

```bash
cd "Portfolio/Cedrick Portfolio"
npm run build
```

The production build will be in the `dist` folder.

## License

Personal Portfolio - All rights reserved