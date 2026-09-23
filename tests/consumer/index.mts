import { defineConfig } from 'taro-define-config'
import type { TaroConfig } from 'taro-define-config'

const config: TaroConfig<'vite'> = defineConfig({
  compiler: 'vite',
  h5: { legacy: true, devServer: { strictPort: true } },
  mini: { output: { chunkFileNames: '[name].js' } },
})

export default config
