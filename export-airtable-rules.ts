import * as fs from 'fs'
import * as yaml from 'js-yaml'
import Airtable from 'airtable'

require('dotenv').config()

type Dict = {
  [key: string]: string | number | string[] | Spec[]
}

type Spec = {
  from: string
  to: string
}

const FILE_NAME = 'prh-idiomatic-usage.yml'

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_ENDPOINT_URL,
  apiKey: process.env.AIRTABLE_API_KEY,
})

const baseId = process.env.AIRTABLE_BASE_ID ? process.env.AIRTABLE_BASE_ID : ''
const base = Airtable.base(baseId)

base('用字用語：一覧')
  .select({
    view: 'textlint用',
  })
  .firstPage((err: any, records) => {
    if (err) {
      console.error(err)
      return
    }

    if (records) {
      const ymlArray = records
        .map((record) => {
          let rule: Dict = {}
          const expected = record.get('expected') as string
          const pattern = record.get('pattern') as string
          const prh = record.get('prh') as string
          const specFrom = record.get('spec:from') as string
          const specTo = record.get('spec:to') as string

          if (expected) {
            rule = { ...rule, expected: expected }
          }
          if (pattern) {
            rule = { ...rule, pattern: pattern.split(',') }
          }
          if (prh) {
            rule = { ...rule, prh: prh }
          }
          if (specFrom && specTo) {
            // Memo: 必ずどちらも同数の値が入ることを前提としている
            const specFromArray = specFrom.split(',')
            const specToArray = specTo.split(',')
            const specsArray = specFromArray.map((item, index) => {
              return {
                from: item,
                to: specToArray[index],
              }
            })
            rule = { ...rule, specs: specsArray }
          }
          return rule
        })
        .filter((dict) => {
          return Object.keys(dict).length
        })

      const yamlString = yaml.dump(ymlArray)
      fs.writeFile(`./dict/${FILE_NAME}`, yamlString, 'utf8', (err: any) => {
        if (err) {
          console.error(err.message)
          process.exit(1)
        }
        console.log(`${FILE_NAME}を保存しました。`)
      })
    }
  })
