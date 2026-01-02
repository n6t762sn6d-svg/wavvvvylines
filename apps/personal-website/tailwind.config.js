/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0f172a",
          800: "#1f2933",
          700: "#25303a",
          600: "#364252",
          500: "#4b5563",
          300: "#9ca3af",
          100: "#e5e7eb"
        },
        accent: {
          600: "#ad8930",
          500: "#c9a341",
          400: "#d6b55c",
          300: "#e8d08c"
        },
        paper: {
          50: "#f8f8f6",
          100: "#f0f0ed",
          200: "#e3e3df"
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
