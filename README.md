# taro-define-config

> Provide a defineConfig function for tarojs config

[![CI](https://github.com/ntnyq/taro-define-config/workflows/CI/badge.svg)](https://github.com/ntnyq/taro-define-config/actions)
[![NPM VERSION](https://img.shields.io/npm/v/taro-define-config.svg)](https://www.npmjs.com/package/taro-define-config)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/taro-define-config.svg)](https://www.npmjs.com/package/taro-define-config)
[![LICENSE](https://img.shields.io/github/license/ntnyq/taro-define-config.svg)](https://github.com/ntnyq/taro-define-config/blob/main/LICENSE)

> [!IMPORTANT]
> For TaroJS v3 support, please use `taro-define-config` < v0.7.0.

## Install

```shell
npm i taro-define-config -D
```

```shell
yarn add taro-define-config -D
```

```shell
pnpm add taro-define-config -D
```

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

```ts
// config/index.ts

import { defineConfig } from 'taro-define-config'

export default defineConfig({
  projectName: 'hello-world',
  designWidth: 750,
})
```

## Why this package

> [!NOTE]  
> Taro introduced a builtin [defineConfig](https://docs.taro.zone/docs/config/#defineconfig-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0) function since v3.6.9. Maybe you don't need this package.

Improve your TaroJS project configuration experience with:

- 🍭 more fine-grained type support than built-in `defineConfig`
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
