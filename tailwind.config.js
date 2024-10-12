module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      Raleway:["Raleway", "Raleway"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
