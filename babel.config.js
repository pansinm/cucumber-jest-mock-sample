module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: ["jest-hoist", require.resolve('./babel-plugin-mock')],
};
