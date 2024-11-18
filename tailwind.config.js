/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        quaternary: "var(--quaternary)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "radial-gradient(#ffffff33 1px, #00091d 1px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      addUtilities(
        {
          ".bg-custom-gradient-dark": {
            backgroundColor: "#121212", // Dark mode background color
            backgroundImage: "radial-gradient(#ffffff33 1px, #121212 1px)", // Dark mode gradient
            backgroundSize: "20px 20px",
          },
          ".bg-custom-gradient-light": {
            backgroundColor: "#ffffff", // Light mode background color
            backgroundImage: "radial-gradient(#00000033 1px, #f0f0f0 1px)", // Light mode gradient
            backgroundSize: "20px 20px",
          },
        },
        ["responsive", "hover"]
      );
    }),
  ],
};
