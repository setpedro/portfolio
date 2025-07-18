import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0E",
        foreground: "#16161A",
        accent: "#707070",
        "solana-mirror": "#87B7E2",
        "usell-experience": "#38419D",
        snaike: "#34d399",
        "link-hover-blue": "#add8e6",
      },
    },
  },
  plugins: [],
};
export default config;
