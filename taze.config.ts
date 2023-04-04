import { defineConfig } from 'taze'

export default defineConfig({
  exclude: ['@types/tapable', '@types/webpack', 'webpack', 'html-webpack-plugin'],
})
