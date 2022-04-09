# cucumber-jest-mock-sample

jest.mock with cucumber-js & TypeScript


1. use @babel/register transpile TypeScript Code
2. [./babel-plugin-mock.js](./babel-plugin-mock.js) transform jest.mock parameter to resolved path
3. [./jestGlobal.js](./jestGlobal.js) implement jest.mock by hook require('mocked path') and hook require('@jest/globals')


## run

1. Clone this project
2. `yarn`
3. `yarn cucumber`