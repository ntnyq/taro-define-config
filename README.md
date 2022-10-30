# taro-define-config

[![CI](https://github.com/ntnyq/taro-define-config/workflows/CI/badge.svg)](https://github.com/ntnyq/taro-define-config/actions)
[![NPM VERSION](https://img.shields.io/npm/v/taro-define-config.svg)](https://www.npmjs.com/package/taro-define-config)
[![LICENSE](https://img.shields.io/github/license/ntnyq/taro-define-config.svg)](https://github.com/ntnyq/taro-define-config/blob/main/LICENSE)

## Usage

```js
// config/index.js

// @ts-check
const { defineConfig } = require('taro-define-config')

module.exports = defineConfig({
  projectName: `hello-world`,
  designWidth: 750,
})
```

## Why

Improve your eslint configuration experience with:

-   auto-suggestions
-   type checking (Use // @ts-check at the first line in your config file)
-   documentation
-   deprecation warnings

## Prior Art

- [eslint-define-config](https://github.com/Shinigami92/eslint-define-config)

## License

[MIT](./LICENSE) License © 2022 to PRESENT [ntnyq](https://github.com/ntnyq)
