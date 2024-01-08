/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#1B1A2A",
        customGreen: "#65F54C",
        customLightBlue: "#C6D4E4",
        customSkyBlue: "#4CACF5",
      },
    },
  },
  plugins: [],
};
