/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors (for backward compatibility)
        'purple-dark': '#2d1b4e',
        'purple-primary': '#4c1d95',
        'purple-logo': '#6d28d9',
        'magenta-bright': '#ff00ff',
        'magenta-accent': '#ff00cc',
        // Dark purple shades (replacing black)
        'brand-black': '#1e1b4b', // Very dark purple
        'brand-black-dark': '#0f172a', // Darkest purple
        'brand-black-light': '#312e81', // Dark purple
        'brand-charcoal': '#4338ca', // Medium-dark purple
        'brand-graphite': '#4f46e5', // Medium purple
        // Light purple shades (replacing white)
        'brand-white': '#4B0082', // Deep indigo purple (replaces white)
        'brand-white-off': '#6B21A8', // Slightly lighter indigo (replaces white-off)
        'brand-cloud': '#7C3AED', // Medium indigo purple
        // Purple shades
        'brand-purple': '#7c3aed', // Main purple
        'brand-purple-dark': '#5b21b6', // Dark purple
        'brand-purple-darker': '#4c1d95', // Darker purple
        'brand-purple-medium': '#9333ea', // Vibrant medium purple (for boxes)
        'brand-purple-light': '#a78bfa', // Light purple
        'brand-purple-soft': '#c4b5fd', // Soft purple (darker than before)
        'brand-purple-lighter': '#c4b5fd', // Medium purple (darker than before)
        'brand-purple-lightest': '#ddd6fe', // Light purple
        // Legacy support (mapping to new colors)
        'brand-ink': '#1e1b4b',
        'brand-slate': '#4338ca',
        'brand-line': '#4f46e5',
        'brand-steel': '#6366f1',
        'brand-grey': '#6366f1',
        'brand-grey-light': '#818cf8',
        'brand-grey-dark': '#312e81',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite',
        'progress': 'progress 6s linear forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        kenBurns: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.1) translate(-2%, -2%)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

