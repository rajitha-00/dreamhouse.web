import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  fontFamily: {
    inter: ["var(--font-inter)", "sans-serif"],
    poppins: ["var(--font-poppins)", "sans-serif"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--poppins)"],
      },
      colors: {
        primaryColor: "#1B1A55",
        textColorLight: "#445570",
        DreamhouseColor: "#323346",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
