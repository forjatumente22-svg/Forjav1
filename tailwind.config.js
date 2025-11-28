/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          blood: '#1a0000',
          fire: '#ff4400',
          'fire-dim': '#cc3700',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fall': 'fall linear infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10vh) translateX(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(105vh) translateX(20px) scale(0.5)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px #ff4400, 0 0 20px #ff1100', borderColor: '#ff4400' },
          '50%': { boxShadow: '0 0 20px #ff4400, 0 0 30px #ff1100', borderColor: '#ff6600' },
        }
      }
    },
  },
  plugins: [],
}