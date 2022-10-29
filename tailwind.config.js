/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx} "
  ],
  theme: {
    extend: {
      border:{
        conf:'lg'
      },
      width:{
        wid:'200px',
      },
      padding:{
        ConferencePadding:'15px',

      },
      screens:{
        comm:'611px',
      },
      colors: {
        conferenceColor: "#204b55",
        communityColor: "#c59d5f",
        communityColor2: "#102a42",
        bgColor: "#022A36",
        primary: {
          50: "#fafaf9",
          60: "#e84c3d",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      spacing:{
        '128':'4.375rem'
      }
    },

    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    borderRadius:{
      hello:'80px',
      bye:'20px',
      br10:'10px',
      br25:'25px',
    }
  },
  plugins: [],
};
