

/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-shadow': 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        purpleHover: "#5d17eb", // Add your custom color
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        code: ["var(--font-code)"],
        grotesk: ["var(--font-grotesk)"],
      },
      colors: {
      
        color: {
          1: "#5d17eb",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
          7: "#5d17eb",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url('/assets/benefits/card-1.svg')",
        "benefit-card-2": "url('/assets/benefits/card-2.svg')",
        "benefit-card-3": "url('/assets/benefits/card-3.svg')",
        "benefit-card-4": "url('/assets/benefits/card-4.svg')",
        "benefit-card-5": "url('/assets/benefits/card-5.svg')",
        "benefit-card-6": "url('/assets/benefits/card-6.svg')",
      },
      keyframes: {
        showData: {
          '50%': { transform: 'translateY(-10rem)' },
          '100%': { transform: 'translateY(-7rem)' },
        },
        removeOverflow: {
          to: { overflow: 'initial' },
        },
        removeData: {
          '0%': { transform: 'translateY(-7rem)' },
          '50%': { transform: 'translateY(-10rem)' },
          '100%': { transform: 'translateY(0.5rem)' },
        },
        showOverflow: {
          '0%': { overflow: 'initial', pointerEvents: 'none' },
          '50%': { overflow: 'hidden' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 1)' },
        },
      },
      animation: {
        showData: "showData 1s forwards",
        removeOverflow: "removeOverflow 2s forwards",
        removeData: "removeData 1s forwards",
        showOverflow: "showOverflow 2s forwards",
        glow: 'glow 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, addVariant }) {
      // Base styles
      addBase({});

      // Components
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight": {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
      });

      // Custom Utilities
      addUtilities({
        /* Hide scrollbar for Chrome, Safari, and Edge */
        ".scrollbar-hidden": {
          "&::-webkit-scrollbar": { display: "none" },
        },
        /* Hide scrollbar for Firefox */
        ".scrollbar-hidden": {
          "scrollbar-width": "none",
        },
        ".fade-container": {
          height: "50px",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1))",
        },
      });

      // Forced Colors Support
      addVariant("forced-colors", "@media (forced-colors: active)");
    }),
  ],
};
