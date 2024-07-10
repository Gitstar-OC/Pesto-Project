/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { ml : ["ML", "mono"], /* Installed Mali font is applied here */
      ar : ["AR", "sans-serif"], /* Installed Archivo font is applied here */
      mr : ["MR", "sans-serif"] /* Installed Marcellus font is applied here */
      }
    }
  },
  plugins: [],
}

