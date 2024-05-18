import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      primary:"#7c3aed",
      primaryDark:"#5b21b6",
      primaryLight:"#c4b5fd",
      secondary:"",
      light:"#f4f4f5",
      dark:"#27272a",
      white:"#ffffff",
      yellow:"#fbbf24",
      success:"#a7f3d0",
      successDark:"#047857",
      danger:"#fda4af",
      danegerDark:"#e11d48"
    }
  },
  plugins: [],
};
export default config;
