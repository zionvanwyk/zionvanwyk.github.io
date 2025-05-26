// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6f00',
        background: '#121212',
        surface: '#2e2e2e',
        text: '#fdf6ec',
        hover: '#1e1e1e',
        pressed: '#333333',
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      }
    }
  },
  plugins: [],
}
