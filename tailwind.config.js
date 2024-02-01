/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter', sans-serif;"],
        poppins: ["'poppins', sans-serif"],
      },
      container: {
        center: true,
        padding: "12px",
        screens: {
          xl: "1440px",
        },
      },
      boxShadow: {
        default: " 0px 0px 34px 0px rgba(176, 0, 0, 0.30)",
        lg: "0px 0px 64px 0px rgba(176, 0, 0, 0.30)",
        realStory: "0px 10px 20px 0px rgba(41, 41, 42, 0.07)",
      },
      scrollBehavior: {
        scrollbar: "smoth",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "@media (max-width: 1023.98px)": {
          ".overflow_hidden": {
            overflow: "hidden",
          },
        },
      });
    },
  ],
};
