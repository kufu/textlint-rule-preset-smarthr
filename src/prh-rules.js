"use strict";

import prh from "textlint-rule-prh";
import path from "path";
import fs from "fs";

module.exports = function (context) {
  return prh.fixer(context, {
    ruleContents: [
      fs.readFileSync(
        path.join(__dirname, "..", "dict", "prh-rules.yml"),
        "utf-8"
      ),
    ],
  });
};
