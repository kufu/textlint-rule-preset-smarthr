import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'
import Airtable from 'airtable'

require('dotenv').config()

type Dict = {
  [key: string]: string | string[] | Spec[]
}
type Spec = {
  from: string
  to: string
}

const DIST_PATH_NAME = path.join(__dirname, '../dict/prh-idiomatic-usage.yml')

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

          // Memo: どの値もStringが入ってくる想定
          const expected = record.get('expected')
          const pattern = record.get('pattern')
          const prh = record.get('prh')
          const specFrom = record.get('spec:from')
          const specTo = record.get('spec:to')

          if (typeof expected === 'string') {
            rule = { ...rule, expected: expected }
          }
          if (typeof pattern === 'string') {
            rule = { ...rule, pattern: pattern.split(',') }
          }
          if (typeof prh === 'string') {
            rule = { ...rule, prh: prh }
          }
          if (typeof specFrom === 'string' && typeof specTo === 'string') {
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

      const yamlString = yaml.dump({ rules: ymlArray })
      fs.writeFile(DIST_PATH_NAME, yamlString, 'utf8', (err: any) => {
        if (err) {
          console.error(err.message)
          process.exit(1)
        }
        console.log(`データ出力完了しました。`)
      })
    } else {
      console.warn(`出力するデータがありません。`)
    }
  })
