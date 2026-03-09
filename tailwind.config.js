module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to look at your React files
  ],
  theme: {
    extend: {
      colors: {
        'lab-bg': '#0b0f1a',
        'lab-cyan': '#38bdf8',
        'lab-green': '#4ade80',
        'lab-panel': '#161b2a',
      },
    },
  },
  plugins: [],
}

