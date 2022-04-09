const { Module } = require('module');

const { fn, ModuleMocker } = require("jest-mock");

global.expect = require("expect");

// implements global jest object
global.jest = {
  fn,
  mock: (moduleName, implementation) => {
    delete require.cache[moduleName];
    
    const length = implementation ? implementation.length : 0;
    const Mock = new ModuleMocker(global);
    const fn = Mock._makeComponent(
      {
        length,
        type: "function",
      },
      () => {
        delete require.cache[moduleName];
      }
    );
    if (implementation) {
      fn.mockImplementation(implementation);
    }

    // require(moduleName) => mock
    const mod = new Module(moduleName);
    mod.exports = fn();
    require.cache[moduleName] = mod;
  },
};

// require('@jest/globals') => { jest: global.jest }
const mod = new Module(require.resolve('@jest/globals'));
mod.exports = { jest }
require.cache[require.resolve('@jest/globals')] = mod;