const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        aspekta: ['var(--font-aspekta)', 'sans-serif'],
        'cabinet-grotesk': ['var(--font-cabinet-grotesk)', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '0' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '0' }],
        '4xl': ['2.25rem', { lineHeight: '1', letterSpacing: '0' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0' }],
        '10xl': ['8rem', { lineHeight: '1', letterSpacing: '0' }],
        '11xl': ['10rem', { lineHeight: '1', letterSpacing: '0' }],
        '12xl': ['12rem', { lineHeight: '1', letterSpacing: '0' }],
        'xxl': ['15rem', { lineHeight: '1', letterSpacing: '0' }],
        'xxxl': ['21rem', { lineHeight: '1', letterSpacing: '0' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    addVariablesForColors,
  ],
};


function addVariablesForColors({ addBase, theme })
{
  let allColors = flattenColorPalette(theme("colors"));
  console.log(allColors); // Check what colors are being flattened

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${ key }`, val])
  );

  console.log(newVars); // Verify the final CSS variable object

  addBase({
    ":root": newVars,
  });
}