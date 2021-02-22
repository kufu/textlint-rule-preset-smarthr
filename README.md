# textlint-rule-preset-smarthr

[WIP]SmartHRらしい文書を書くためのtextlintルールプリセットです。

## Rules

* [textlint-rule-ja-no-mixed-period](https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-preset-smarthr

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "preset-smarthr": true
    }
}
```

Via CLI

```
textlint --rule preset-smarthr README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © 
