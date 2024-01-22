/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-pic": "url('/src/assets/pic.jpg')",
      },
    },
  },
  plugins: [],
};
