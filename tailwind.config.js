/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#1a1a2e',
          dark: '#0f0f1a',
          card: '#1e1e32',
          hover: '#252540',
        },
        accent: {
          DEFAULT: '#7dd3a8',
          glow: 'rgba(125, 211, 168, 0.15)',
          muted: 'rgba(125, 211, 168, 0.6)',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#9ca3af',
          muted: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
