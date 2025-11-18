# Aspire Roofing Website

A modern, responsive website for Aspire Roofing built with React and Tailwind CSS.

## Features

- **Dark Purple Theme** with bright magenta accents
- **Fully Responsive** design for mobile, tablet, and desktop
- **Modern UI Components** with rounded pill buttons and diagonal decorations
- **Reusable Components** for easy maintenance

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  components/
    Navbar.jsx          # Navigation bar with logo, links, and social icons
    Hero.jsx            # Hero section with roof background
    WhyAspire.jsx       # Two-column section with form
    LocalSpecialists.jsx # Local specialists section with roof grid
    AboutSection.jsx    # About page with Mission/Innovation/Support
    Gallery.jsx         # Gallery category strip
    Services.jsx        # Services columns section
    Footer.jsx          # Footer with areas and contact info
  App.jsx               # Main app component
  main.jsx              # Entry point
  index.css             # Global styles with Tailwind
```

## Adding Images

Place your images in the `public/images/` directory. See `public/images/README.md` for a complete list of required images.

The components include error handling that displays placeholder text when images are missing, so you can add images gradually.

## Color Scheme

- **Primary Background**: Dark Purple (`#1a0d2e`, `#2d1b4e`)
- **Accent Color**: Bright Magenta (`#ff00ff`, `#ff00cc`)
- **Text**: White with various opacity levels

## Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: `sm:` (640px+)
- Desktop: `md:` (768px+)
- Large Desktop: `lg:` (1024px+)

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

