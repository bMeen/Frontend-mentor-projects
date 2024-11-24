/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-barlow)",
        "sans-barlow-condensed": "var(--font-barlow-condensed)",
        serif: "var(--font-bellefair)",
      },
      colors: {
        "blue-900": "var(--blue-900)",
        "blue-300": "var(--blue-300)",
      },
      spacing: {
        25: "var(--space-25)",
        50: "var(--space-50)",
        100: "var(--space-100)",
        150: "var(--space-150)",
        200: "var(--space-200)",
        300: "var(--space-300)",
        400: "var(--space-400)",
        500: "var(--space-500)",
        600: "var(--space-600)",
        800: "var(--space-800)",
        1000: "var(--space-1000)",
        1200: "var(--space-1200)",
        1600: "var(--space-1600)",
      },
      letterSpacing: {
        "15p": "0.15em",
      },
      fontSize: {
        "preset-1": "var(--text-preset-1)",
        "preset-2": "var(--text-preset-2)",
        "preset-3": "var(--text-preset-3)",
        "preset-4": "var(--text-preset-4)",
        "preset-6": "var(--text-preset-6)",
        "preset-8": "var(--text-preset-8)",
        "preset-9": "var(--text-preset-9)",

        "text-preset-2-tab": "var(--text-preset-2-tab)",
        "text-preset-3-tab": "var(--text-preset-3-tab)",
        "text-preset-4-tab": "var(--text-preset-4-tab)",
        "text-preset-5-tab": "var(--text-preset-5-tab)",
        "text-preset-9-tab": "var(--text-preset-9-tab)",

        "preset-1-lg": "var(--text-preset-1-lg)",
        "preset-2-lg": "var(--text-preset-2-lg)",
        "preset-3-lg": "var(--text-preset-3-lg)",
        "preset-4-lg": "var(--text-preset-4-lg)",
        "preset-5-lg": "var(--text-preset-5-lg)",
        "preset-6-lg": "var(--text-preset-6-lg)",
        "preset-7-lg": "var(--text-preset-7-lg)",
        "preset-8-lg": "var(--text-preset-8-lg)",
        "preset-9-lg": "var(--text-preset-9-lg)",
      },
    },
  },
  plugins: [],
};
