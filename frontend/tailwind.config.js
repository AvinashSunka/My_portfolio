/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use class strategy for dark mode toggle
  theme: {
    extend: {
      // === Animations ===
      animation: {
        'loop-scroll': 'loop-scroll 20s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

      // === Colors ===
      colors: {
        brand: {
          DEFAULT: '#f97316', // Orange-500 (main brand accent)
          dark: '#fb923c',    // Slightly lighter in dark mode
        },
        background: {
          light: '#fdfcfb',          // Light background
          dark: '#0f172a',           // Slate-900
        },
        surface: {
          light: 'rgba(255, 255, 255, 0.6)',   // Glassy cards in light
          dark: 'rgba(30, 41, 59, 0.4)',       // Glassy cards in dark
        },
        border: {
          light: '#e5e7eb', // Gray-200
          dark: '#334155',  // Slate-700
        },
        text: {
          light: '#1e293b', // Slate-800
          dark: '#f8fafc',  // Slate-100
        },
        input: {
          light: '#f9fafb',   // Gray-50
          dark: '#2c2c2c',    // Custom dark input
        },
      },

      // === Blur/Glass Effects ===
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        glass: '0 8px 30px rgba(0, 0, 0, 0.12)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
      },

      // === Typography & Layout ===
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        glass: '1.25rem',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
