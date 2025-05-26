/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rosa-claro": "#F5C3C2",
        "rosa-medio": "#D49A9A",
        "marrom-dourado": "#9F7E4B",
        "preto-suave": "#333333",
        "bege-claro": "#F9F5F0",
      },
      fontFamily: {
        playfair: ["\"Playfair Display\"", "serif"],
        montserrat: ["\"Montserrat\"", "sans-serif"],
      },
    },
  },
  plugins: [],
}
