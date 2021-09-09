# textlint-rule-preset-smarthr

SmartHRらしい文書を書くための、textlintルールプリセットを提供します。

## インストール

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-preset-smarthr

## 使い方

Via `.textlintrc`(Recommended)

### Via CLI

```
textlint --rule preset-smarthr README.md
```

### Build

ソースコードをビルドして、`lib`フォルダに公開します。
TypeScriptのソースコードは`src/`フォルダに書くことができます。

```
npm run build
```

### Tests

`test`フォルダ内のテストコードを実行します。
testの詳細は[textlint-tester](https://github.com/textlint/textlint-tester)を参照してください。

```
npm test
```
### 基本設定

すべてのルールを有効化して使う場合は、次のように設定してください。

```json
{
  "rules": {
    "preset-smarthr": true
  }
}
```
### デフォルト設定

デフォルトでは、次のような設定になっています。個別にルールを有効・無効化することも可能です。

```json
{
  "rules": {
    "preset-smarthr": {
      "prh-rules": true,
      "ja-no-mixed-period": true,
      "no-hankaku-kana": true,
      "@textlint-rule/no-unmatched-pair": true,
      "sentence-length": {
        "max": 120
      },
      "no-doubled-conjunctive-particle-ga": true,
      "no-double-negative-ja": true,
      "ja-no-abusage": true,
      "ja-no-redundant-expression": true,
      "no-mixed-zenkaku-and-hankaku-alphabet": true,
      "ja-keishikimeishi": {
        "detection_hou_kata" : false
      },
      "ja-hiragana-fukushi": true,
      "ja-hiragana-hojodoushi": true,
      "ja-hiragana-daimeishi": true,
      "ja-no-space-around-parentheses": true,
      "ja-no-space-between-full-width": true,
      "ja-space-between-half-and-full-width": {
        "space": "never"
      },
      "ja-space-after-exclamation": true,
      "ja-space-after-question": true,
      "ja-space-around-code": false
    }
  }
}
```

## 設定ルール一覧

* [textlint-rule-ja-hiragana-daimeishi](https://github.com/lostandfound/textlint-rule-ja-hiragana-daimeishi)
* [textlint-rule-ja-hiragana-fukushi](https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi)
* [textlint-rule-ja-hiragana-hojodoushi](https://github.com/lostandfound/textlint-rule-ja-hiragana-hojodoushi)
* [textlint-rule-ja-keishikimeishi](https://github.com/otapo/textlint-rule-ja-keishikimeishi)
* [textlint-rule-ja-no-abusage](https://github.com/textlint-ja/textlint-rule-ja-no-abusage)
* [textlint-rule-ja-no-mixed-period](https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period)
* [textlint-rule-ja-no-redundant-expression](https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression)
* [textlint-rule-max-ten](https://github.com/textlint-ja/textlint-rule-max-ten)
* [textlint-rule-no-double-negative-ja](https://github.com/textlint-ja/textlint-rule-no-double-negative-ja)
* [textlint-rule-no-doubled-conjunction](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction)
* [textlint-rule-no-doubled-conjunctive-particle-ga](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga)
* [textlint-rule-no-doubled-joshi](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi)
* [textlint-rule-no-dropping-the-ra](https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra)
* [textlint-rule-no-hankaku-kana](https://github.com/textlint-ja/textlint-rule-no-hankaku-kana)
* [textlint-rule-no-mix-dearu-desumasu](https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu)
* [textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet](https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet)
* [textlint-rule-no-nfd](https://github.com/textlint-ja/textlint-rule-no-nfd)
* [textlint-rule-prh](https://github.com/textlint-rule/textlint-rule-prh)
* [textlint-rule-sentence-length](https://github.com/textlint-rule/textlint-rule-sentence-length)
* [textlint-rule-preset-ja-spacing](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing)（補足1）
  * textlint-rule-ja-nakaguro-or-halfwidth-space-between-katakana
  * textlint-rule-ja-no-space-around-parentheses
  * textlint-rule-ja-no-space-between-full-width
  * textlint-rule-ja-space-after-exclamation
  * textlint-rule-ja-space-after-question
  * textlint-rule-ja-space-around-code
  * textlint-rule-ja-space-between-half-and-full-width

補足1: `textlint-rule-preset-ja-spacing`のルールプリセットを分解して設定しています。

## 辞書設定

表記ゆれ修正用の辞書の設定には`textlint-rule-prh`を使っています。
対応用語は`dict/`フォルダに入っている`.yml`を確認してください。

## License

MIT
