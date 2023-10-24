/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customOne: "rgba(227, 227, 227, 1.0)",
        customTwo: "rgb(117, 117, 117)",
      },
    },
  },
  plugins: [],
};
