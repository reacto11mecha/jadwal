const purgecss = require("@fullhuman/postcss-purgecss");

const dev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    !dev &&
      purgecss({
        content: ["./index.html", "./src/**/*.jsx"],
      }),
  ],
};
