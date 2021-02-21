"use strict";
const { moduleInterop } = require("@textlint/module-interop");

module.exports = {
  rules: {
    "ja-no-mixed-period": moduleInterop(
      require("textlint-rule-ja-no-mixed-period")
    ),
  },
  rulesConfig: {
    "ja-no-mixed-period": true,
  },
};
