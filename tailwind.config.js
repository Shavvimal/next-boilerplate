/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#EAEAEA",
          300: "#D9D9D9",
          500: "#7B7B83",
          800: "#1B1B1D",
        },
        support: {
          up: "#00E196",
          down: "#FD4062",
        },
        solid: {
          up: "#30453E",
          down: "#3D2F32",
        },
        selector: {
          Yellow: "#CCD283",
          Green: "#68C88E",
          Blue: "#66BFFF",
          Purple: "#956BCB",
          Pink: "#C769A7",
          Tangerine: "#DFA565",
        },
        orange: {
          300: "#E88A23",
          400: "#EC7C00",
          500: "#E76B1C",
          700: "#CB6C05",
        },
        red: {
          500: "#B63136",
        },
        // Legacy colors
        dark: {
          50: "#D04F36FF",
          100: "#C34836FF",
          200: "#B54137FF",
          300: "#A83937FF",
          400: "#2a2934", // this is the background color
          500: "#2d2c34", // This is the Quadra Dark backgruond color
          600: "#802439FF",
          700: "#731C39FF",
          800: "#2d2d35", // Dark from Login Modal
          900: "#22262d", // Darker from Login Modal
          950: "#1E2125", // Used in the inputs
        },
        plum: {
          100: "#BE3941",
          200: "#BA3641",
          300: "#B53341",
          400: "#B13141",
          500: "#AD2E41",
          600: "#A82B41",
          700: "#A32941",
          800: "#9F2641",
          900: "#9A2441",
        },
        darkplum: {
          100: "#B4343F",
          200: "#A82D41",
          300: "#9C2742",
          400: "#8F2142",
          500: "#821B42",
          600: "#751641",
          700: "#67123E",
          800: "#580E3A",
          900: "#490A34",
        },
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.625rem",
        "5xl": "3.25rem",
        "6xl": "5.5rem",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      lineHeight: {
        none: "1",
        tighter: "1.125",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.2rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      minWidth: {
        10: "2.5rem",
        48: "12rem",
      },
      opacity: {
        90: "0.9",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
