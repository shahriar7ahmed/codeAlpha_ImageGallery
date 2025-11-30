# Modern Image Gallery

A beautiful, modern, and fully responsive image gallery built with React and Vite. Features a stunning UI/UX with smooth animations, lightbox viewing, category filtering, and mobile-first responsive design.

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds, smooth animations, and elegant typography
- 📱 **Fully Responsive** - Mobile-first design that works perfectly on all devices
- 🖼️ **Lightbox Viewer** - Full-screen image viewing with navigation controls
- 🔍 **Category Filtering** - Filter images by category (All, Nature, Architecture, People)
- ⚡ **Performance Optimized** - Lazy loading, image optimization, and smooth transitions
- 🎭 **Smooth Animations** - Fade-in effects, hover animations, and scroll-triggered reveals
- 📥 **Download & Share** - Download images or share them using native share API
- ⌨️ **Keyboard Navigation** - Navigate with arrow keys and ESC to close
- 👆 **Touch Gestures** - Swipe left/right on mobile devices
- 🔝 **Scroll to Top** - Smooth scroll-to-top button

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd codeAlpha_ImageGallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
codeAlpha_ImageGallery/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx          # Main gallery grid component
│   │   ├── Gallery.css
│   │   ├── Lightbox.jsx         # Full-screen image viewer
│   │   ├── Lightbox.css
│   │   ├── FilterButtons.jsx    # Category filter buttons
│   │   ├── FilterButtons.css
│   │   ├── ScrollToTop.jsx      # Scroll to top button
│   │   └── ScrollToTop.css
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Adding Images

Edit the `imageData` array in `src/App.jsx`:

```javascript
const imageData = [
  { 
    id: 1,
    src: 'path/to/full-size-image.jpg',
    thumbnail: 'path/to/thumbnail.jpg',
    title: 'Image Title',
    category: 'nature', // or 'architecture', 'people'
    description: 'Image description'
  },
  // ... more images
]
```

### Changing Colors

Modify the CSS variables in `src/index.css`:

```css
:root {
  --accent-color: #6366f1;      /* Primary accent color */
  --primary-bg: #0a0a0a;        /* Background color */
  --text-primary: #ffffff;       /* Primary text color */
  /* ... more variables */
}
```

### Adding Categories

1. Add new categories to the `categories` array in `App.jsx`
2. Update the `categoryLabels` object in `FilterButtons.jsx`

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **Modern JavaScript** - ES6+ features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features in Detail

### Responsive Grid
- Automatically adjusts columns based on screen size
- Mobile: 1-2 columns
- Tablet: 2-3 columns
- Desktop: 3-4+ columns

### Lightbox Features
- Full-screen image viewing
- Keyboard navigation (Arrow keys, ESC)
- Touch swipe gestures on mobile
- Image download
- Native share API support
- Smooth transitions

### Performance
- Lazy loading images
- Intersection Observer for animations
- Optimized image loading
- Smooth 60fps animations

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

Built with ❤️ using React and Vite
