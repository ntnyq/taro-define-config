# taro-define-config

> Provide a defineConfig function for tarojs config

[![CI](https://github.com/ntnyq/taro-define-config/workflows/CI/badge.svg)](https://github.com/ntnyq/taro-define-config/actions)
[![NPM VERSION](https://img.shields.io/npm/v/taro-define-config.svg)](https://www.npmjs.com/package/taro-define-config)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/taro-define-config.svg)](https://www.npmjs.com/package/taro-define-config)
[![LICENSE](https://img.shields.io/github/license/ntnyq/taro-define-config.svg)](https://github.com/ntnyq/taro-define-config/blob/main/LICENSE)

## Usage

```js
// config/index.js

// @ts-check
const { defineConfig } = require('taro-define-config')

module.exports = defineConfig({
  projectName: 'hello-world',
  designWidth: 750,
})
```

## Why this package

Improve your TaroJS project configuration experience with:

- 🤖 auto-suggestions
- ✅ type checking (Use // @ts-check at the first line in your config file)
- 📖 documentation
- ⚠️ deprecation warnings

## Extend plugin types

```ts
declare module 'taro-define-config' {
  export interface CustomPluginOptionsMap {
    'taro-plugin-custom': {
      enable?: boolean
    }
  }
}
```

## Prior Art

- [eslint-define-config](https://github.com/Shinigami92/eslint-define-config)

## Related link

- [Taro - Config detail](https://nervjs.github.io/taro-docs/docs/config-detail)
- [Taro docs - config-detail.md](https://github.com/NervJS/taro-docs/commits/master/docs/config-detail.md)

## License

[MIT](./LICENSE) License © 2022 to PRESENT [ntnyq](https://github.com/ntnyq)
