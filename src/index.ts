import { moduleInterop } from '@textlint/module-interop'

module.exports = {
  rules: {
    'ja-no-mixed-period': moduleInterop(require('textlint-rule-ja-no-mixed-period')),
    'prh-rules': moduleInterop(require('./prh-rules')),
  },
  rulesConfig: {
    'ja-no-mixed-period': true,
    'prh-rules': true,
  },
}
