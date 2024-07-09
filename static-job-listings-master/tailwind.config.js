/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "light-grayish-cyan": " hsl(180, 52%, 96%)",
        "filter-light-grayish-cyan": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": " hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": " hsl(180, 14%, 20%)",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
