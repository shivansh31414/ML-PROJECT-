/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#93c5fd", // Tailwind blue-300
          DEFAULT: "#3b82f6", // Tailwind blue-500
          dark: "#1e40af", // Tailwind blue-900
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
