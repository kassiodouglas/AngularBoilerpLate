/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const colors = {
  primary: {
    50: "#f6f5fd",
    100: "#efedfa",
    200: "#e1ddf7",
    300: "#cbc1f1",
    400: "#b19ee7",
    500: "#9676dc",
    600: "#7f50cc",
    700: "#7546bb",
    800: "#623a9d",
    900: "#513181",
    950: "#331e57",
  },
  secondary: {
    50: "#f6f6f6",
    100: "#e7e7e7",
    200: "#d1d1d1",
    300: "#b0b0b0",
    400: "#888888",
    500: "#6d6d6d",
    600: "#5c5c5c",
    700: "#4f4f4f",
    800: "#454545",
    900: "#3d3d3d",
    950: "#262626",
  },
  danger: {
    50: "#fef2f2",
    100: "#fde3e3",
    200: "#fccccc",
    300: "#f8a9a9",
    400: "#f27777",
    500: "#e84b4b",
    600: "#d42e2e",
    700: "#b52323",
    800: "#942020",
    900: "#7b2121",
    950: "#430c0c",
  },
  warning: {
    50: "#fafcea",
    100: "#f1f8c9",
    200: "#e7f296",
    300: "#deea5a",
    400: "#dae22d",
    500: "#d6d620",
    600: "#b5a919",
    700: "#917d17",
    800: "#79631a",
    900: "#67521c",
    950: "#3c2d0c",
  },
  info: {
    50: "#eefdfd",
    100: "#d5f7f8",
    200: "#b0edf1",
    300: "#79dfe7",
    400: "#3bc8d5",
    500: "#23bfd0",
    600: "#1d8a9d",
    700: "#1e7080",
    800: "#215b69",
    900: "#1f4d5a",
    950: "#0f323d",
  },
  success: {
    50: "#f3f9ec",
    100: "#e4f2d5",
    200: "#c9e7af",
    300: "#a7d680",
    400: "#87c358",
    500: "#6cac3c",
    600: "#50852b",
    700: "#3f6625",
    800: "#355222",
    900: "#2e4621",
    950: "#16260d",
  },
  "bg-dark": "#262626",
  "bg-light": "#EBEBEB"
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    { pattern: /grid-cols-\d+/ }, // Permite qualquer classe grid-cols-{N}
  ],
  theme: {
    extend: {
      colors: { ...colors },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.button': {
          '@apply max-h-10 font-semibold py-2 px-4 rounded-md focus:ring-2 focus:ring-opacity-50 transition-all active:scale-105 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed truncate border-none': {},
        },
        '.btn-xs': { '@apply text-xs py-1 px-3':{} },
        '.btn-sm': { '@apply text-sm py-1 px-3':{} },
        '.btn-lg': { '@apply text-lg py-3 px-3 max-h-10':{} },
        '.btn-xl': { '@apply text-xl py-2 max-h-12':{} },
        '.btn-2xl': { '@apply text-2xl py-2 max-h-16':{} },

        '.btn-primary': { '@apply bg-primary-900 hover:bg-primary-700 text-white focus:ring-primary-400':{} },
        '.btn-secondary': { '@apply bg-secondary-900 hover:bg-secondary-700 text-white focus:ring-secondary-400':{} },
        '.btn-success': { '@apply bg-success-500 hover:bg-success-700 text-white focus:ring-success-400':{} },
        '.btn-danger': { '@apply bg-danger-500 hover:bg-danger-700 text-white focus:ring-danger-400':{} },
        '.btn-warning': { '@apply bg-warning-600 hover:bg-warning-700 text-white focus:ring-warning-400':{} },
        '.btn-info': { '@apply bg-info-500 hover:bg-info-700 text-white focus:ring-info-400':{} },

        '.btn-white': { '@apply bg-white hover:bg-slate-100 text-secondary-500 focus:ring-secondary-400':{} },
        '.btn-black': { '@apply bg-black hover:bg-slate-900 text-secondary-200 focus:ring-secondary-800':{} },

        '.btn-xs-primary': { '@apply button btn-xs btn-primary':{} },
        '.btn-sm-primary': { '@apply button btn-sm btn-primary':{} },
        '.btn-md-primary': { '@apply button btn-primary':{} },
        '.btn-lg-primary': { '@apply button btn-lg btn-primary':{} },
        '.btn-xl-primary': { '@apply button btn-xl btn-primary':{} },
        '.btn-2xl-primary': { '@apply button btn-2xl btn-primary':{} },

        '.btn-xs-secondary': { '@apply button btn-xs btn-secondary':{} },
        '.btn-sm-secondary': { '@apply button btn-sm btn-secondary':{} },
        '.btn-md-secondary': { '@apply button btn-secondary':{} },
        '.btn-lg-secondary': { '@apply button btn-lg btn-secondary':{} },
        '.btn-xl-secondary': { '@apply button btn-xl btn-secondary':{} },
        '.btn-2xl-secondary': { '@apply button btn-2xl btn-secondary':{} },

        '.btn-xs-success': { '@apply button btn-xs btn-success':{} },
        '.btn-sm-success': { '@apply button btn-sm btn-success':{} },
        '.btn-md-success': { '@apply button btn-success':{} },
        '.btn-lg-success': { '@apply button btn-lg btn-success':{} },
        '.btn-xl-success': { '@apply button btn-xl btn-success':{} },
        '.btn-2xl-success': { '@apply button btn-2xl btn-success':{} },

        '.btn-xs-danger': { '@apply button btn-xs btn-danger':{} },
        '.btn-sm-danger': { '@apply button btn-sm btn-danger':{} },
        '.btn-md-danger': { '@apply button btn-danger':{} },
        '.btn-lg-danger': { '@apply button btn-lg btn-danger':{} },
        '.btn-xl-danger': { '@apply button btn-xl btn-danger':{} },
        '.btn-2xl-danger': { '@apply button btn-2xl btn-danger':{} },

        '.btn-xs-warning': { '@apply button btn-xs btn-warning':{} },
        '.btn-sm-warning': { '@apply button btn-sm btn-warning':{} },
        '.btn-md-warning': { '@apply button btn-warning':{} },
        '.btn-lg-warning': { '@apply button btn-lg btn-warning':{} },
        '.btn-xl-warning': { '@apply button btn-xl btn-warning':{} },
        '.btn-2xl-warning': { '@apply button btn-2xl btn-warning':{} },

        '.btn-xs-info': { '@apply button btn-xs btn-info':{} },
        '.btn-sm-info': { '@apply button btn-sm btn-info':{} },
        '.btn-md-info': { '@apply button btn-info':{} },
        '.btn-lg-info': { '@apply button btn-lg btn-info':{} },
        '.btn-xl-info': { '@apply button btn-xl btn-info':{} },
        '.btn-2xl-info': { '@apply button btn-2xl btn-info':{} },

        '.btn-xs-black': { '@apply button btn-xs btn-black':{} },
        '.btn-sm-black': { '@apply button btn-sm btn-black':{} },
        '.btn-md-black': { '@apply button btn-black':{} },
        '.btn-lg-black': { '@apply button btn-lg btn-black':{} },
        '.btn-xl-black': { '@apply button btn-xl btn-black':{} },
        '.btn-2xl-black': { '@apply button btn-2xl btn-black':{} },

        '.btn-xs-white': { '@apply button btn-xs btn-white':{} },
        '.btn-sm-white': { '@apply button btn-sm btn-white':{} },
        '.btn-md-white': { '@apply button btn-white':{} },
        '.btn-lg-white': { '@apply button btn-lg btn-white':{} },
        '.btn-xl-white': { '@apply button btn-xl btn-white':{} },
        '.btn-2xl-white': { '@apply button btn-2xl btn-white':{} },

      })
    })
  ],
};
