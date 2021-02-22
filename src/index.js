"use strict";
const { moduleInterop } = require("@textlint/module-interop");

("use strict");
module.exports = {
  rules: {
    "ja-no-mixed-period": moduleInterop(
      require("textlint-rule-ja-no-mixed-period")
    ),
    "prh-rules": require("./prh-rules"),
  },
  rulesConfig: {
    "ja-no-mixed-period": true,
    "prh-rules": true,
  },
};
