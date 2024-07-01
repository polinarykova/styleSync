module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-sorting": {
      order: [
        "custom-properties",
        "dollar-variables",
        "declarations",
        "rules",
        "at-rules",
      ],
      "properties-order": "alphabetical",
      "unspecified-properties-position": "bottom",
    },
  },
};
