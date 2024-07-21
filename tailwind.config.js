/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      "theme-black": "#1d1d1d",
      "theme-white": "#fafafa",
      "theme-pale": "#d5d3c1",
      "theme-blue": "#0f2e4c",
      "theme-tail": "#43656e",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
