/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        'gradient-start': 'rgb(var(--gradient-start) / <alpha-value>)',
        'gradient-end': 'rgb(var(--gradient-end) / <alpha-value>)',
        'text-dark': 'rgb(var(--text-dark) / <alpha-value>)',
        'text-light': 'rgb(var(--text-light) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blink-red': 'blinkRed 1s infinite', // Added blink-red animation
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blinkRed: { // Added blinkRed keyframes
          '0%, 100%': { color: 'rgb(var(--text-dark))', opacity: '1' }, // Adjust default color if needed
          '50%': { color: 'red', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};