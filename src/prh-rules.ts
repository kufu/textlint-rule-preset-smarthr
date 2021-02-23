const fs = require('fs')
const prh = require('textlint-rule-prh')

const reporter = (context: any) => {
  const ruleContent = fs.readFileSync(__dirname + '/../dict/prh-rules.yml', 'utf-8')
  return prh.fixer(context, {
    ruleContents: [ruleContent],
  })
}

module.exports = {
  linter: reporter,
  fixer: reporter,
}
