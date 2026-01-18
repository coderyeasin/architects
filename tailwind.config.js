/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--color-bgPrimary)",
        bgSecondary: "var(--color-bgSecondary)",
        textPrimary: "var(--color-textPrimary)",
        thirdBg: "var(--color-thirdBg)",
        grayText: "#727272",
      },
      maxWidth: {
        360: "1440px",
      },
      height: {
        25: "100px",
        50: "200px",
      },
      width: {
        85.5: "342px",
      },
      leading: {
        6.5: "1.625rem",
        14: "3.5rem",
        18: "4.5rem",
      },
      gap: {
        12: "3rem",
        20: "5rem",
      },
    },
  },
  plugins: [],
};
