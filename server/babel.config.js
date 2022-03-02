module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["@babel/preset-env"],
    env: {
      development: {
        plugins: [["inline-dotenv", { path: ".env.development" }]],
      },
    },
  };
};
