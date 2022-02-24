import { TextLintCore } from "textlint";
import assert from "assert";
import rule from "../../src/index"

describe("textlint-rule-preset-smarthr", () => {
  // Copied from textlint/src/config/config.js
  const defaultOptions = Object.freeze({
    // rule package names
    rules: [],
    // disabled rule package names
    // always should start with empty
    disabledRules: [],
    // rules config object
    rulesConfig: {},
    // filter rule package names
    filterRules: [],
    disabledFilterRules: [],
    // rules config object
    filterRulesConfig: {},
    // preset package names
    // e.g.) ["preset-foo"]
    presets: [],
    // plugin package names
    plugins: [],
    // plugin config
    pluginsConfig: {},
    // base directory for loading {rule, config, plugin} modules
    rulesBaseDirectory: undefined,
    // ".textlint" file path
    configFile: undefined,
    // rule directories
    rulePaths: [],
    // formatter file name
    // e.g.) stylish.js => set "stylish"
    // NOTE: default formatter is defined in Engine,
    // because There is difference between TextLintEngine and TextFixEngine.
    formatterName: undefined,
    // --quiet
    quiet: false,
    // --no-color
    color: true,
    // --no-textlintrc
    textlintrc: true,
    // --cache : enable or disable
    cache: false,
    // --cache-location: cache file path
    cacheLocation: undefined,
    // --ignore-path: ".textlintignore" file path
    ignoreFile: undefined
  });

  const buildTextlint = () => {
    const options = Object.assign({}, defaultOptions, rule)

    const textlint = new TextLintCore(options)
    textlint.setupRules(options.rules, options.rulesConfig)

    return textlint
  }

  context("valid cases", () => {
    const validStrings = [
      "正しく。"
    ]

    it("should pass", async () => {
      const textlint = buildTextlint()

      for (const text of validStrings) {
        const { messages } = await textlint.lintText(text)
        assert.deepEqual(messages, [])
      }
    })
  })
})
