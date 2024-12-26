import type { Config } from "tailwindcss";
import { tailwindConfig as libraryConfig } from "component-library";
export default {
  presets: [libraryConfig],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef2f3",
          100: "#fee5e7",
          200: "#fccfd5",
          300: "#f9a8b1",
          400: "#f47889",
          500: "#ec526b",
          600: "#d7274c",
          700: "#b51b3f",
          800: "#98193b",
          900: "#821938",
          950: "#48091a",
        },
        secondary: {
          50: "#f0fbfa",
          100: "#d7f4f3",
          200: "#b7eae9",
          300: "#85dbdb",
          400: "#4cc2c4",
          500: "#30a7aa",
          600: "#2b888f",
          700: "#286e76",
          800: "#295b61",
          900: "#264c53",
          950: "#143238",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
