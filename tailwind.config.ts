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
        solanaMirror: "#87B7E2",
        usellExperience: "#38419D",
        "link-hover-blue": "#add8e6",
      },
    },
  },
  plugins: [],
};
export default config;
