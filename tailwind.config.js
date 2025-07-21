/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary black and orange color scheme
        primary: {
          black: '#000000',
          'black-soft': '#0a0a0a',
          'black-medium': '#1a1a1a',
          orange: '#ff6600',
          'orange-light': '#ff8533',
          'orange-dark': '#cc5200',
          'orange-glow': '#ff6600'
        },
        // White text variations
        text: {
          primary: '#ffffff',
          secondary: '#f5f5f5',
          muted: '#cccccc'
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'orange-glow': '0 0 20px #ff6600',
        'orange-glow-lg': '0 0 40px #ff6600',
        'orange-glow-xl': '0 0 60px #ff6600'
      },
      animation: {
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'particle-drift': 'particle-drift 8s linear infinite',
        'orange-pulse': 'orange-pulse 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate'
      },
      keyframes: {
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.8' }
        },
        'particle-drift': {
          '0%': { transform: 'translateX(-100vw) translateY(0px)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateX(100vw) translateY(-50px)', opacity: '0' }
        },
        'orange-pulse': {
          '0%': { boxShadow: '0 0 20px #ff6600' },
          '100%': { boxShadow: '0 0 40px #ff6600, 0 0 60px #ff6600' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'glow-pulse': {
          '0%': { textShadow: '0 0 10px #ff6600' },
          '100%': { textShadow: '0 0 20px #ff6600, 0 0 30px #ff6600' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-black-orange': 'linear-gradient(135deg, #000000 0%, #ff6600 100%)',
        'gradient-orange-black': 'linear-gradient(135deg, #ff6600 0%, #000000 100%)',
        'gradient-black-orange-black': 'linear-gradient(135deg, #000000 0%, #ff6600 50%, #000000 100%)'
      }
    },
  },
  plugins: [],
}