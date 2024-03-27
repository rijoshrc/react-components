/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // button
        "primary-btn": "#fff",
        "destructive-btn": "#fff",
        "secondary-btn": "#000",
      },
      backgroundColor: {
        "primary-btn": "#000",
        "destructive-btn": "red",
        "secondary-btn": "#f4e5d1",
      },
      borderColor: {
        "outline-btn": "#000",
      },
    },
  },
  plugins: [],
};
