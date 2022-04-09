module.exports = require("@babel/register")({
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  configFile: './babel.config.js'
});
