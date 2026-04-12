import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff5b01",
          "orange-dark": "#e86425",
          "orange-deep": "#c44200",
          beige: "#f5f0eb",
          "beige-light": "#f8f6f2",
          dark: "#1a1a1a",
          black: "#111111",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        heading: ["Raleway", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      animation: {
        "float-up": "floatUp 3s ease-in-out infinite",
        "float-down": "floatDown 4s ease-in-out infinite 1s",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        floatUp: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(-12px)", opacity: "1" },
        },
        floatDown: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(12px)", opacity: "0.8" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
