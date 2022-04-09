module.exports = {
  default: {
    requireModule: [__dirname + "/register.js", __dirname + '/jestGlobal.js'],
    require: ["features/step-definitions/**/*.ts"],
  },
};
