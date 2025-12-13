/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aged-yellow': '#e8dcc4',
        'paper-white': '#f4f1e8',
        'stamp-red': '#8b3a3a',
        'vintage-green': '#4a5d4f',
        'ink-black': '#2d2d2d',
      },
      fontFamily: {
        'special-elite': ['"Special Elite"', 'cursive'],
        'courier-prime': ['"Courier Prime"', 'monospace'],
      },
      animation: {
        'letter-pop': 'letterPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'image-float': 'imageFloat 6s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'icon-blink': 'iconBlink 2s ease-in-out infinite',
      },
      keyframes: {
        letterPop: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '50%': { transform: 'translateY(-10px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        imageFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        iconBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
