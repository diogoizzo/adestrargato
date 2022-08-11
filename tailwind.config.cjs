/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   darkMode: "class", // or 'media' or 'class'
   theme: {
      fontFamily: {
         body: '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
         heading:
            '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
         sans: '"Poppins", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
         serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
         mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      fill: {
         current: "currentColor",
      },
      extend: {
         colors: {
            coolGray: {
               50: "#F7F8F9",
               100: "#EEF0F3",
               200: "#D5DAE1",
               300: "#BBC3CF",
               400: "#8896AB",
               500: "#556987",
               600: "#4D5F7A",
               700: "#404F65",
               800: "#333F51",
               900: "#2A3342",
            },
         },
         container: {
            center: true,
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
