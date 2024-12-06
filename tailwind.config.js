/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo
        secondary: "#10b981", // Emerald
        accent: "#f59e0b", // Amber
        background: "#f9fafb", // Light Gray
        text: "#1f2937", // Dark Gray
      },
    },
  },
  plugins: [],
}

