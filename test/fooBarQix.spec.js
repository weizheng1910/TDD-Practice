const { expect } = require("chai");
const fooBarQix = require("../src/fooBarQix.js");
const {
  isDivisible,
  divisibleByFooBarQix,
} = require("../src/divisibleFooBarQix");
const {
  convertNumberIntoArray,
  isDigitFooBarQix,
  containsFooBarQix,
} = require("../src/containsFooBarQix");
const { FOO_BAR_QIX_KEYS, FOO_BAR_QIX_KEYS_INT } = require("../src/constant");

describe("containsFooBarQix component", () => {
  it("convertNumberIntoArray works", () => {
    expect(convertNumberIntoArray(34)).to.eql(["3", "4"]);
  });

  it("isDigitFooBarQix works", () => {
    expect(isDigitFooBarQix(5)).to.equal("Bar");
  });

  it("containsFooBarQix should work", () => {
    expect(containsFooBarQix(3)).to.equal("Foo");
  });
});

describe("divisibleByFooBarQix component", () => {
  it("isDivisible works", () => {
    expect(isDivisible(3, 3)).to.equal(true);
  });

  it("divisibleByFooBarQix should work", () => {
    expect(divisibleByFooBarQix(3)).to.equal("Foo");
  });
});

describe("Other test cases", () => {
  it("fooBarQix.compute(3) should return FooFoo", () => {
    expect(fooBarQix.compute(3)).to.equal("FooFoo");
  });

  it("fooBarQix.compute(15) should return FooBarBar", () => {
    expect(fooBarQix.compute(15)).to.equal("FooBarBar");
  });

  it("fooBarQix.compute(33) should return FooFooFoo", () => {
    expect(fooBarQix.compute(33)).to.equal("FooFooFoo");
  });

  it("fooBarQix.compute(1) should return 1", () => {
    expect(fooBarQix.compute(1)).to.equal(1);
  });
});
