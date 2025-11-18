/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-ink': '#0b0d14',
        'brand-charcoal': '#1a2332',
        'brand-graphite': '#2a3441',
        'brand-slate': '#3a4450',
        'brand-line': '#4a5460',
        'brand-cloud': '#f4f4f5',
        'brand-steel': '#9ca3af',
        // Polyglass-inspired blue palette
        'brand-blue': '#003366',        // Patriot Blue - primary
        'brand-blue-dark': '#002244',    // Darker blue
        'brand-blue-light': '#004C8C',   // Lighter blue
        'brand-blue-soft': '#0066CC',    // Soft blue accent
        'brand-blue-accent': '#0080FF',  // Bright accent blue
        // Professional greys (Kool Grey inspired)
        'brand-grey': '#6b7280',
        'brand-grey-light': '#9ca3af',
        'brand-grey-dark': '#4b5563',
        'brand-kool-grey': '#5a6570',    // Kool Grey
        // Purple accents
        'brand-purple': '#7c3aed',       // Primary purple
        'brand-purple-soft': '#a78bfa',  // Soft purple
        'brand-purple-light': '#c4b5fd', // Light purple accent
        'brand-white': '#ffffff',
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

