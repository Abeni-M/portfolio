/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        background: "var(--bg-deep)",
        border: "var(--border)",
        muted: "var(--text-muted)",
      },
    },
  },
  plugins: [],
}
