module.exports = {
  presets: ["@babel/preset-env"],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-transform-runtime"],
    },
  },
};
