const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure correct paths
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-motion"),  // Ensure motion plugin works
    require("tailwindcss-intersect"), // Ensure intersect works
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // IE/Edge
          "scrollbar-width": "none", // Firefox
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
