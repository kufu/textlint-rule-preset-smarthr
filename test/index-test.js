"use strict";
const assert = require("assert");
const index = require("../src/index");
describe("index-test", function () {
  context("rules", function () {
    it("should have default rulesConfig", function () {
      Object.keys(index.rules).forEach((ruleName) => {
        assert(
          index.rulesConfig[ruleName] !== undefined,
          `${ruleName} ref is undefined.`
        );
      });
    });
    it("should not ref same function", function () {
      Object.keys(index.rules).forEach((ruleName) => {
        let rule = index.rules[ruleName];
        Object.keys(index.rules).forEach((otherRuleName) => {
          if (otherRuleName !== ruleName) {
            assert(
              rule !== index.rules[otherRuleName],
              `${ruleName} !== ${otherRuleName}`
            );
          }
        });
      });
    });
  });
});
