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
      primary:"#6366f1",
      primaryDark:"#4338ca",
      primaryLight:"#818cf8",
      secondary:"",
      light:"#f4f4f5",
      dark:"#27272a",
      white:"#ffffff",
      yellow:"#fbbf24"
    }
  },
  plugins: [],
};
export default config;
