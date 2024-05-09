module.exports = {
  content: ["./templates/**/*.twig", "./js/**/*.js", "./**/*.php"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
