/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
      heading: ["Anton", "sans-serif"],
    },
    extend: {
      colors: {
        // Configure your color palette here
        primary: "#D7FB00",
        grey: {
          50: "#999999",
          100: "#666666",
        },
        secondary: {
          50: "#242424",
          100: "#121212",
        },
      },
    },
  },
  plugins: [],
};
