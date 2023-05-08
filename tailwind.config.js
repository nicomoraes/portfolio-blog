const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'secondary': '0px 0px 20px -2px #04BFBF',
        'tertiary': '0px 0px 20px -2px #F24405',
      },
      colors: {
       'background': '#010010',
       'foreground': '#FFFFFF',
       'primary': '#100f1e',
       'primary-border': '#282734',
       'secondary': '#04BFBF',
       'tertiary': '#F24405',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
