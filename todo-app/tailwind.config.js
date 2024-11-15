/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "check-background":
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": " hsl(236, 33%, 92%)",
        "light-grayish-blue": " hsl(233, 11%, 84%)",
        "dark-grayish-blue": " hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": " hsl(235, 19%, 35%)",
        /* Dark Mode */
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue-dk": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue-dk": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue-dk": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-dark": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
