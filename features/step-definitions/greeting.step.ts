import assert from "assert";
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
