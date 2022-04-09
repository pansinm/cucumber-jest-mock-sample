# cucumber-jest-mock-sample

jest.mock with cucumber-js & TypeScript

```ts
import { When, Then, Before } from "@cucumber/cucumber";
import Greeter from "../../src/index";

jest.mock(
  "../../src/index",
  () =>
    class {
      sayHello = jest.fn().mockReturnValue("hi");
    }
);


When("the greeter says hello", function () {
  this.g = new Greeter();
  this.whatIHeard = this.g.sayHello();
});

Then("I should have heard {string}", function (expectedResponse) {
  expect(expectedResponse).toBe('hello');
  expect(this.g.sayHello).toBeCalled();
  expect(this.whatIHeard).toBe("hi");
});

```

1. use @babel/register transpile TypeScript Code
2. [./babel-plugin-mock.js](./babel-plugin-mock.js) transform jest.mock parameter to resolved path
3. [./jestGlobal.js](./jestGlobal.js) implement jest.mock by hook require('mocked path') and hook require('@jest/globals')


## run

1. Clone this project
2. `yarn`
3. `yarn cucumber`