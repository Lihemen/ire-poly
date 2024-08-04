/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#09005F",
        "brand-yellow": "#DDAC45",
        "brand-gray": "#D9D9D9",
      },
      width: {
        card: "638px",
        id: "2.63in",
      },
      height: {
        card: "1012px",
        id: "3.88in",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      ringWidth: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
