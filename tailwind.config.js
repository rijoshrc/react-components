/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27283E",
        "primary-dark": "#fff",
        secondary: "#707172",
        "secondary-dark": "#707172",
        // button
        "primary-btn": "#fff",
        "primary-btn-dark": "#fff",
        "destructive-btn": "#fff",
        "destructive-btn-dark": "#fff",
        "secondary-btn": "#000",
        "secondary-btn-dark": "#000",
        "outline-btn": "#000",
        "outline-btn-dark": "#fff",
        "ghost-btn": "#000",
        "ghost-btn-dark": "#fff",
        "link-btn": "#000",
        "link-btn-dark": "#fff",
        // end of button
      },
      backgroundColor: {
        primary: "#fff",
        "primary-dark": "#000",
        secondary: "#f0f0f0",
        "secondary-dark": "#515151",
        // button
        "primary-btn": "#80D17A",
        "primary-btn-dark": "#80D17A",
        "destructive-btn": "red",
        "destructive-btn-dark": "red",
        "secondary-btn": "#f4e5d1",
        "secondary-btn-dark": "#f4e5d1",
        "ghost-btn": "rgb(246, 246, 249)",
        "ghost-btn-dark": "rgb(57, 56, 56)",
        // end of button
      },
      borderColor: {
        // button
        "outline-btn": "#000",
        "outline-btn-dark": "#fff",
        // end of button
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
