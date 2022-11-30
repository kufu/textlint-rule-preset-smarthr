const fs = require('fs')
const prh = require('textlint-rule-prh')

const reporter = (context: any) => {
  const idiomaticUsage = fs.readFileSync(__dirname + '/../dict/prh-idiomatic-usage.yml', 'utf-8')
  return prh.fixer(context, {
    ruleContents: [idiomaticUsage],
  })
}

module.exports = {
  linter: reporter,
  fixer: reporter,
}
