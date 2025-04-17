import { moduleInterop } from '@textlint/module-interop'

module.exports = {
  rules: {
    'prh-rules': moduleInterop(require('./prh-rules')),
    'ja-no-mixed-period': moduleInterop(require('textlint-rule-ja-no-mixed-period')),
    'no-hankaku-kana': moduleInterop(require('textlint-rule-no-hankaku-kana')),
    '@textlint-rule/no-unmatched-pair': moduleInterop(require('@textlint-rule/textlint-rule-no-unmatched-pair')),
    'sentence-length': moduleInterop(require('textlint-rule-sentence-length')),
    'no-doubled-conjunctive-particle-ga': moduleInterop(require('textlint-rule-no-doubled-conjunctive-particle-ga')),
    'no-double-negative-ja': moduleInterop(require('textlint-rule-no-double-negative-ja')),
    'ja-no-abusage': moduleInterop(require('textlint-rule-ja-no-abusage')),
    'ja-no-redundant-expression': moduleInterop(require('textlint-rule-ja-no-redundant-expression')),
    'no-mixed-zenkaku-and-hankaku-alphabet': moduleInterop(require('textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet')),
    'ja-keishikimeishi': moduleInterop(require('textlint-rule-ja-keishikimeishi')),
    'ja-hiragana-hojodoushi': moduleInterop(require('textlint-rule-ja-hiragana-hojodoushi')),
    'ja-hiragana-daimeishi': moduleInterop(require('textlint-rule-ja-hiragana-daimeishi')),
    'ja-no-space-around-parentheses': moduleInterop(require('textlint-rule-ja-no-space-around-parentheses')),
    'ja-no-space-between-full-width': moduleInterop(require('textlint-rule-ja-no-space-between-full-width')),
    'ja-space-between-half-and-full-width': moduleInterop(require('textlint-rule-ja-space-between-half-and-full-width')),
    'ja-space-after-exclamation': moduleInterop(require('textlint-rule-ja-space-after-exclamation')),
    'ja-space-after-question': moduleInterop(require('textlint-rule-ja-space-after-question')),
    'ja-space-around-code': moduleInterop(require('textlint-rule-ja-space-around-code')),
    'no-nfd': moduleInterop(require('textlint-rule-no-nfd')),
  },

  rulesConfig: {
    'prh-rules': true,
    'ja-no-mixed-period': true,
    'no-hankaku-kana': true,
    '@textlint-rule/no-unmatched-pair': true,
    'sentence-length': {
      max: 120,
    },
    'no-doubled-conjunctive-particle-ga': true,
    'no-double-negative-ja': true,
    'ja-no-abusage': true,
    'ja-no-redundant-expression': true,
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
    'ja-keishikimeishi': {
      'detection_hou_kata' : false,
      'detection_ue' : false
    },
    'ja-hiragana-hojodoushi': true,
    'ja-hiragana-daimeishi': true,
    'ja-nakaguro-or-halfwidth-space-between-katakana': true,
    'ja-no-space-around-parentheses': true,
    'ja-no-space-between-full-width': true,
    'ja-space-between-half-and-full-width': {
      space: 'never',
    },
    'ja-space-after-exclamation': true,
    'ja-space-after-question': true,
    'ja-space-around-code': false,
    'no-nfd': true
  },
}
