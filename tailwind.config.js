/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        custom: "0 2px 10px rgba(0,0,0,.1)",
      },
      keyframes: {
        blob: {
          '0%, 100%': { "border-radius": "60% 40% 40% 70%/60% 40% 70% 40%" },
          '50%': { "border-radius": "40% 60% 70% 40%/40% 60% 40% 60%" },
        },
        "move-right": {
          '100%': { "transform": "translate(-50%,0)" },
        }
      },
      animation: {
        "blob": "blob 5s ease-in-out infinite",
        'spin-slow': 'spin 10s linear infinite',
        'move-right': 'move-right 1s ease-in-out 1 forward'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}