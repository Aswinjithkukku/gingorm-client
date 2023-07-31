/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: "#42B3FF",
        textColor: "#313131",
        backgroundColor: "#F9FAFD",
        stoneBackgroundColor: "#F1F1F1",
        darkBackgroundColor: "#191919",
        grayColor: "#D8D8D8",
      },
    },
  },
  plugins: [],
};
