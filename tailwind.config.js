/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(45deg, #000000, #333333)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
      },
      backdropBrightness: {
        90: '90%',
        75: '75%',
      },
      backdropContrast: {
        90: '90%',
        75: '75%',
      },
      backdropSaturate: {
        90: '90%',
        75: '75%',
      },
      backgroundImage: {
        'gradient-moving': 'linear-gradient(45deg, #003300, #000000)',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pings: {
          '0%': { opacity: '0' },
          '75%, 100%': { transform: 'scale(1.3)' },
          '100%': { transform: 'translateX(-550px) translateY(-380px)' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideLeft: 'slideLeft 15s linear infinite',
        slideRight: 'slideRight 15s linear infinite',
        floatUp: 'floatUp 1.5s ease-in-out infinite',
        floatDown: 'floatDown 1.5s ease-in-out infinite',
        pings: 'pings 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'gradient-moving': 'gradient-move 10s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
};
