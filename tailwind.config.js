module.exports = {
  content: [
    './templates/**/*.html',
    './apps/**/*.py',
    // Add other template paths here
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
