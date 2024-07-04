/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "color-facebook": "hsl(208, 92%, 53%)",
        "color-twitter": "hsl(203, 89%, 53%)",
        "color-instagram":
          "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        "color-youTube": "hsl(348, 97%, 39%)",
        "dark-toggle":
          "linear gradient hsl(2,10, 78%, 56%) to hsl(146, 68%, 55%)",
        "light-toggle": "hsl(230, 22%, 74%)",
        /* DARK THEME */
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "dark-desaturated-blue": " hsl(228, 28%, 20%)",
        "hover-dark-desaturated-blue": " hsl(228, 28%, 25%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        /* WHITE THEME */
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "very-dark-blue-light": "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
