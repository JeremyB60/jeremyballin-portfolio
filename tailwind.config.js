/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPlum: "#3d3145",
        customGreen: "#6DE05D",
        customBlue: "#C6D4E4",
        customSkyBlue: "#00bfff",
      },
    },
  },
  plugins: [],
};
