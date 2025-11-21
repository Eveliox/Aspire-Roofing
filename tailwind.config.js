/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black shades
        'brand-black': '#000000',
        'brand-black-dark': '#0a0a0a',
        'brand-black-light': '#1a1a1a',
        'brand-charcoal': '#2a2a2a',
        'brand-graphite': '#3a3a3a',
        // White shades
        'brand-white': '#ffffff',
        'brand-white-off': '#f8f8f8',
        'brand-cloud': '#f0f0f0',
        // Purple shades
        'brand-purple': '#7c3aed',
        'brand-purple-dark': '#5b21b6',
        'brand-purple-light': '#a78bfa',
        'brand-purple-soft': '#c4b5fd',
        'brand-purple-lighter': '#ddd6fe',
        // Legacy support (mapping to new colors)
        'brand-ink': '#000000',
        'brand-slate': '#2a2a2a',
        'brand-line': '#3a3a3a',
        'brand-steel': '#6b7280',
        'brand-grey': '#6b7280',
        'brand-grey-light': '#9ca3af',
        'brand-grey-dark': '#1a1a1a',
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

