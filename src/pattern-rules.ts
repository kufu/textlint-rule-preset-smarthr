import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import patternRule from '@textlint-rule/textlint-rule-pattern'

import type { TextlintRuleContext } from '@textlint/types'

type Pattern = {
  message: string
  pattern: string
}

const patternsYaml = fs.readFileSync(path.join(__dirname, '..', 'dict', 'pattern-rules.yml'), 'utf-8')
const config = yaml.load(patternsYaml) as { patterns: Pattern[] }

const reporter = (context: TextlintRuleContext) => {
  return patternRule.linter(context, config)
}

module.exports = {
  linter: reporter,
  fixer: reporter,
}
