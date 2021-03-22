const fs = require('fs')
const prh = require('textlint-rule-prh')

const reporter = (context: any) => {
  const basicRule = fs.readFileSync(__dirname + '/../dict/prh-basic.yml', 'utf-8')
  const techWordRule = fs.readFileSync(__dirname + '/../dict/prh-tech-word.yml', 'utf-8')
  return prh.fixer(context, {
    ruleContents: [basicRule, techWordRule],
  })
}

module.exports = {
  linter: reporter,
  fixer: reporter,
}
