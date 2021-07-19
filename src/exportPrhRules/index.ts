import * as fs from 'fs'
const yaml = require('js-yaml')
const Airtable = require('airtable')

require('dotenv').config()

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_ENDPOINT_URL,
  apiKey: process.env.AIRTABLE_API_KEY,
})

const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

base('用字用語')
  .select({
    view: '閲覧用',
  })
  .firstPage((err: any, records: any) => {
    if (err) {
      console.error(err)
      return
    }

    const ymlArray = records.map((record: any) => {
      return { expected: record.get('用字用語'), pattern: record.get('NG').split(',') }
    })
    const yamlString = yaml.dump(ymlArray)
    fs.writeFile('./dict/prh-basic.yml', yamlString, 'utf8', (err: any) => {
      if (err) {
        console.error(err.message)
        process.exit(1)
      }
      console.log('prh-basic.ymlを保存しました。')
    })
  })
