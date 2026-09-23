// Exercise the CommonJS conditional export.
// oxlint-disable-next-line typescript/no-require-imports
import taro = require('taro-define-config')

const config: taro.TaroConfig = taro.defineConfig({
  mini: {
    webpackChain(chain, webpack) {
      chain.plugin('define').use(webpack.DefinePlugin, [{ __DEV__: true }])
      chain.module.rule('scripts').test(/\.ts$/u).use('ts').loader('ts-loader')
      chain.output.filename('[name].js')
      chain.resolve.alias.set('@', '/app/src')
    },
  },
})

export = config
