/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#403F3F",
          secondary: "#F3F3F3",
          accent: "#FF8C47",
          neutral: "#9F9F9F",
          // neutral: "#FF3030",
          "base-100": "#FFFFFF",
          warning: "#EB5757",
          error: "#D72050",
        },
      },
      {
        extend: {
          backgroundImage: {
            "right-nav-img": "url('./src/assets/bg.png')",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
