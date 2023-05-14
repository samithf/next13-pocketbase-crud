/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  themes: true,
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: "cupcake",
  },
};
