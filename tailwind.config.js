/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bts-bg-dark": "#02061A",
        "bts-bg-mid": "#041234",
        "bts-card": "#071938",
        "bts-card-soft": "#0C2146",
        "bts-border": "#1B335F",
        "bts-accent": "#2F7BFF",
        "bts-accent-soft": "#224CBA",
      },
      boxShadow: {
        "bts-soft": "0 18px 40px rgba(0,0,0,0.45)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
