# Mahelet Kassa - React Portfolio Website

A modern, responsive personal portfolio website built with React, showcasing my work as a Full Stack Software Engineer based in Boston, MA.

## 🚀 What's New in React Version

This is a complete React conversion of the original portfolio website, featuring:

- **Modern React Architecture**: Component-based structure with hooks
- **No jQuery Dependencies**: All functionality replaced with React hooks and vanilla JavaScript
- **Better Performance**: Virtual DOM, code splitting, and optimized rendering
- **Improved Maintainability**: Modular components and reusable hooks
- **Type Safety Ready**: Easy to migrate to TypeScript
- **Modern Build Tools**: Vite for fast development and optimized builds

## 🌐 Live Site

Visit the live website at: [maheletkassa.com](https://maheletkassa.com/)

## 📋 Features

- **About Section**: Introduction and professional background
- **Technical Skills**: Interactive carousel showcasing technologies
- **Portfolio**: Collection of projects with modal details
- **Resume**: Work experience, education, and certifications
- **Contact**: Email contact information
- **Responsive Design**: Works seamlessly on all devices
- **Smooth Scrolling**: Native smooth scroll navigation
- **Active Section Highlighting**: Navigation highlights current section

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 (preserved from original)
- **Icons**: Font Awesome 6, Material Icons, Devicons
- **Fonts**: Poppins, Lora

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mahelet-kassa/mahelet-kassa.github.io.git
cd mahelet-kassa.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
mahelet-kassa.github.io/
├── public/                 # Static assets
│   ├── images/            # Image files
│   ├── favicon.png
│   └── Mahelet_Kassa_Resume.pdf
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Intro.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Portfolio.jsx
│   │   ├── PortfolioModal.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx
│   │   └── BackToTop.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useActiveSection.js
│   ├── utils/             # Utility functions
│   │   └── smoothScroll.js
│   ├── data/              # Data files
│   │   └── portfolioData.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── css/                   # Original CSS files (preserved)
│   ├── base.css
│   ├── main.css
│   ├── vendor.css
│   └── fonts.css
├── vite.config.js         # Vite configuration
├── package.json
└── README-REACT.md        # This file
```

## 🔄 Migration from Original

### What Changed

1. **jQuery Removed**: All jQuery functionality replaced with React hooks
2. **Component Structure**: HTML sections converted to React components
3. **State Management**: Using React useState and useEffect hooks
4. **Event Handling**: Native React event handlers
5. **Modal System**: Custom React modal component replacing Magnific Popup
6. **Carousel**: Custom React implementation replacing Owl Carousel
7. **Smooth Scroll**: Custom utility function replacing jQuery smoothscroll

### What Stayed the Same

- All CSS styles preserved
- Same visual design and layout
- Same content and structure
- Same images and assets

## 🚢 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages

Or use the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

### Other Platforms

The built `dist` folder can be deployed to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

## 🛠️ Development

### Adding New Portfolio Items

Edit `src/data/portfolioData.js` to add new portfolio items.

### Modifying Styles

The original CSS files in the `css/` directory are preserved. You can:
- Modify existing CSS files
- Add new CSS files and import them in `main.jsx`
- Use CSS modules or styled-components (optional)

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Add navigation link in `Header.jsx`

## 📝 Notes

- The contact form functionality (PHP) is not included in the React version. Consider using a service like Formspree or EmailJS for form handling.
- All images should be placed in the `public/images/` directory
- The resume PDF should be in the `public/` directory

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under GNU GPLv3.

---

*Last Updated: 2024*

