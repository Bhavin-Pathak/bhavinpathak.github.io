/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        "primary-dark": "#6366f1",
        background: "#f9fafb",
        "background-dark": "#111827",
        "muted-foreground": "#6b7280",
        "muted-foreground-dark": "#9ca3af",
      },
    },
  },
  plugins: [],
};
