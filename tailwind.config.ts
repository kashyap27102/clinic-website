import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out forwards",
      },
    },
    colors: {
      primary: "#2b3458",
      primaryDark: "#141e46",
      primaryLight: "#424a6a",
      secondary: "#bb2525",
      light: "#f4f4f5",
      dark: "#27272a",
      white: "#ffffff",
      yellow: "#fbbf24",
      success: "#a7f3d0",
      successDark: "#047857",
      danger: "#fda4af",
      danegerDark: "#e11d48",
    },
  },
  plugins: [],
};
export default config;
