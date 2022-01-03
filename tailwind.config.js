module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      default: ['Nunito Sans', 'sans-serif']
    },
    colors: {
      'dark-blue': 'var(--dark-blue)',
      'dark-blue-bg': 'var(--dark-blue-bg)',
      'dark-blue-text': 'var(--dark-blue-text)',
      'dark-gray': 'var(--dark-gray)',
      'light-gray': 'var(--light-gray)',
      'neutrals-white': 'var(--neutrals-white)',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}

// --dark-blue-color: hsl(209, 23%, 22%);
//   --dark-blue-bg: hsl(207, 26%, 17%);
//   --dark-blue-text-color: hsl(200, 15%, 8%);
//   --dark-gray: hsl(0, 0%, 52%);
//   --light-gray: hsl(0, 0%, 98%);
//   --neutrals-white: hsl(0, 0%, 100%);