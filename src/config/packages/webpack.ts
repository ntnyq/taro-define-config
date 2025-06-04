/**
 * @file Types for `webpack`
 */

import type webpack from 'webpack'
import type {
  Compilation,
  Compiler,
  Configuration,
  LoaderContext,
} from 'webpack'

export type Webpack = typeof webpack

export type WebpackCompilation = Compilation
export type WebpackCompiler = Compiler
export type WebpackConfiguration = Configuration
export type WebpackLoaderContext<T = any> = LoaderContext<T>
