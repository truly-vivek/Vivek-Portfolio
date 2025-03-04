module.exports = {
    content: [
      './port/**/*.html', // Ensures Tailwind scans vivek.html
      './port/assets/**/*.js' // If you use Tailwind in JavaScript files
    ],
    important: '.tailwind-section', // Restrict Tailwind styles inside this class
  };
  