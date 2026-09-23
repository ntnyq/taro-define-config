/*!
 * Adapted from webpack-chain 6.5.1 types/index.d.ts for Webpack 5.
 * https://github.com/neutrinojs/webpack-chain/tree/v6.5.1
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/* oxlint-disable typescript/no-namespace, typescript/no-extraneous-class, no-redeclare, max-classes-per-file */

import type * as https from 'node:https'
import type * as webpack from 'webpack'

export type ChainableWebpackConfig = Config

declare namespace __Config {
  export class Chained<Parent> {
    end(): Parent
  }

  export class TypedChainedMap<Parent, Value> extends Chained<Parent> {
    clear(): this
    delete(key: string): this
    has(key: string): boolean
    get(key: string): Value
    getOrCompute(key: string, compute: () => Value): Value
    set(key: string, value: Value): this
    merge(obj: Record<string, Value>): this
    entries(): Record<string, Value>
    values(): Value[]
    when(
      condition: boolean,
      trueBrancher: (obj: this) => void,
      falseBrancher?: (obj: this) => void,
    ): this
  }

  export class ChainedMap<Parent> extends TypedChainedMap<Parent, any> {}

  export class TypedChainedSet<Parent, Value> extends Chained<Parent> {
    add(value: Value): this
    prepend(value: Value): this
    clear(): this
    delete(key: string): this
    has(key: string): boolean
    merge(arr: Value[]): this
    values(): Value[]
    when(
      condition: boolean,
      trueBrancher: (obj: this) => void,
      falseBrancher?: (obj: this) => void,
    ): this
  }

  export class ChainedSet<Parent> extends TypedChainedSet<Parent, any> {}
}

declare class Config extends __Config.ChainedMap<void> {
  devServer: Config.DevServer
  entryPoints: Config.TypedChainedMap<Config, Config.EntryPoint>
  module: Config.Module
  node: Config.ChainedMap<this>
  output: Config.Output
  optimization: Config.Optimization
  performance: Config.Performance
  plugins: Config.Plugins<this, webpack.WebpackPluginInstance>
  resolve: Config.Resolve
  resolveLoader: Config.ResolveLoader

  amd(value: Record<string, boolean>): this
  bail(value: boolean): this
  cache(value: boolean | any): this
  devtool(value: Config.DevTool): this
  context(value: string): this
  externals(value: NonNullable<webpack.Configuration['externals']>): this
  loader(value: any): this
  name(value: string): this
  mode(value: 'none' | 'development' | 'production'): this
  parallelism(value: number): this
  profile(value: boolean): this
  recordsPath(value: string): this
  recordsInputPath(value: string): this
  recordsOutputPath(value: string): this
  stats(value: NonNullable<webpack.Configuration['stats']>): this
  target(value: string): this
  watch(value: boolean): this
  watchOptions(value: NonNullable<webpack.Configuration['watchOptions']>): this

  entry(name: string): Config.EntryPoint
  plugin(name: string): Config.Plugin<this, webpack.WebpackPluginInstance>

  toConfig(): webpack.Configuration
}

declare namespace Config {
  export class Chained<Parent> extends __Config.Chained<Parent> {}
  export class TypedChainedMap<Parent, Value> extends __Config.TypedChainedMap<
    Parent,
    Value
  > {}
  export class ChainedMap<Parent> extends __Config.TypedChainedMap<
    Parent,
    any
  > {}
  export class TypedChainedSet<Parent, Value> extends __Config.TypedChainedSet<
    Parent,
    Value
  > {}
  export class ChainedSet<Parent> extends __Config.TypedChainedSet<
    Parent,
    any
  > {}

  export class Plugins<
    Parent,
    PluginType extends { apply: (...args: any[]) => void } =
      webpack.WebpackPluginInstance,
  > extends TypedChainedMap<Parent, Plugin<Parent, PluginType>> {}

  export class Plugin<
    Parent,
    PluginType extends { apply: (...args: any[]) => void } =
      webpack.WebpackPluginInstance,
  >
    extends ChainedMap<Parent>
    implements Orderable
  {
    init<P extends PluginType | PluginClass<PluginType>>(
      value: (
        plugin: P,
        args: P extends PluginClass ? ConstructorParameters<P> : any[],
      ) => PluginType,
    ): this
    use<P extends string | PluginType | PluginClass<PluginType>>(
      plugin: P,
      args?: P extends PluginClass ? ConstructorParameters<P> : any[],
    ): this
    tap<P extends PluginClass<PluginType>>(
      callback: (args: ConstructorParameters<P>) => ConstructorParameters<P>,
    ): this

    // Orderable
    before(name: string): this
    after(name: string): this
  }

  export class Module extends ChainedMap<Config> {
    rules: TypedChainedMap<this, Rule>
    rule(name: string): Rule
    noParse(
      noParse: RegExp | RegExp[] | ((contentPath: string) => boolean),
    ): this
    strictExportPresence(value: boolean): this
  }

  export class Output extends ChainedMap<Config> {
    auxiliaryComment(value: string | Record<string, string>): this
    chunkFilename(value: string): this
    chunkLoadTimeout(value: number): this
    crossOriginLoading(value: boolean | string): this
    filename(value: string): this
    library(value: string): this
    libraryExport(value: string | string[]): this
    libraryTarget(value: string): this
    devtoolFallbackModuleFilenameTemplate(value: any): this
    devtoolLineToLine(value: any): this
    devtoolModuleFilenameTemplate(value: any): this
    devtoolNamespace(value: string): this
    globalObject(value: string): this
    hashFunction(value: string): this
    hashDigest(value: string): this
    hashDigestLength(value: number): this
    hashSalt(value: any): this
    hotUpdateChunkFilename(value: string): this
    hotUpdateFunction(value: any): this
    hotUpdateMainFilename(value: string): this
    jsonpFunction(value: string): this
    path(value: string): this
    pathinfo(value: boolean): this
    publicPath(value: string): this
    sourceMapFilename(value: string): this
    sourcePrefix(value: string): this
    strictModuleExceptionHandling(value: boolean): this
    umdNamedDefine(value: boolean): this
    futureEmitAssets(value: boolean): this
  }

  export class DevServer extends ChainedMap<Config> {
    allowedHosts: TypedChainedSet<this, string>

    after(
      value: (app: any, server: any, compiler: webpack.Compiler) => void,
    ): this
    before(
      value: (app: any, server: any, compiler: webpack.Compiler) => void,
    ): this
    bonjour(value: boolean): this
    clientLogLevel(value: 'none' | 'error' | 'warning' | 'info'): this
    color(value: boolean): this
    compress(value: boolean): this
    contentBase(value: boolean | string | string[]): this
    disableHostCheck(value: boolean): this
    filename(value: string): this
    headers(value: Record<string, string>): this
    historyApiFallback(value: boolean | any): this
    host(value: string): this
    hot(value: boolean): this
    hotOnly(value: boolean): this
    http2(value: boolean): this
    https(value: boolean | https.ServerOptions): this
    index(value: string): this
    info(value: boolean): this
    inline(value: boolean): this
    lazy(value: boolean): this
    mimeTypes(value: object): this
    noInfo(value: boolean): this
    open(value: boolean): this
    openPage(value: string | string[]): this
    overlay(value: boolean | { warnings?: boolean; errors?: boolean }): this
    pfx(value: string): this
    pfxPassphrase(value: string): this
    port(value: number): this
    progress(value: boolean): this
    proxy(value: any): this
    public(value: string): this
    publicPath(publicPath: string): this
    quiet(value: boolean): this
    setup(value: (expressApp: any) => void): this
    socket(value: string): this
    sockHost(value: string): this
    sockPath(value: string): this
    sockPort(value: number): this
    staticOptions(value: any): this
    stats(value: NonNullable<webpack.Configuration['stats']>): this
    stdin(value: boolean): this
    useLocalIp(value: boolean): this
    watchContentBase(value: boolean): this
    watchOptions(value: any): this
    writeToDisk(value: boolean): this
  }

  export class Performance extends ChainedMap<Config> {
    hints(value: boolean | 'error' | 'warning'): this
    maxEntrypointSize(value: number): this
    maxAssetSize(value: number): this
    assetFilter(value: (assetFilename: string) => boolean): this
  }

  export class EntryPoint extends TypedChainedSet<Config, string> {}

  export class Resolve<T = Config> extends ChainedMap<T> {
    alias: TypedChainedMap<this, string>
    aliasFields: TypedChainedSet<this, string>
    descriptionFiles: TypedChainedSet<this, string>
    extensions: TypedChainedSet<this, string>
    mainFields: TypedChainedSet<this, string>
    mainFiles: TypedChainedSet<this, string>
    modules: TypedChainedSet<this, string>
    plugins: TypedChainedMap<
      this,
      Plugin<
        this,
        Extract<
          NonNullable<webpack.ResolveOptions['plugins']>[number],
          { apply: (...args: any[]) => void }
        >
      >
    >

    enforceExtension(value: boolean): this
    enforceModuleExtension(value: boolean): this
    unsafeCache(value: boolean | RegExp | RegExp[]): this
    symlinks(value: boolean): this
    cachePredicate(
      value: (data: { path: string; request: string }) => boolean,
    ): this
    cacheWithContext(value: boolean): this

    plugin(
      name: string,
    ): Plugin<
      this,
      Extract<
        NonNullable<webpack.ResolveOptions['plugins']>[number],
        { apply: (...args: any[]) => void }
      >
    >
  }

  export class ResolveLoader extends Resolve {
    moduleExtensions: ChainedSet<this>
    packageMains: ChainedSet<this>
  }

  export class Rule<T = Module> extends ChainedMap<T> implements Orderable {
    rules: TypedChainedMap<this, Rule<Rule>>
    oneOfs: TypedChainedMap<this, Rule<Rule>>
    uses: TypedChainedMap<this, Use>
    include: TypedChainedSet<this, webpack.RuleSetCondition>
    exclude: TypedChainedSet<this, webpack.RuleSetCondition>
    resolve: Resolve<Rule<T>>

    parser(value: Record<string, any>): this
    test(value: webpack.RuleSetCondition | webpack.RuleSetCondition[]): this
    type(
      value:
        | 'javascript/auto'
        | 'javascript/dynamic'
        | 'javascript/esm'
        | 'json'
        | 'webassembly/experimental',
    ): this
    enforce(value: 'pre' | 'post'): this

    use(name: string): Use<this>
    rule(name: string): Rule<Rule>
    oneOf(name: string): Rule<Rule>
    pre(): this
    post(): this
    before(name: string): this
    after(name: string): this
    resourceQuery(
      value: webpack.RuleSetCondition | webpack.RuleSetCondition[],
    ): this
  }

  export class Optimization extends ChainedMap<Config> {
    concatenateModules(value: boolean): this
    flagIncludedChunks(value: boolean): this
    mergeDuplicateChunks(value: boolean): this
    minimize(value: boolean): this
    minimizer(name: string): Config.Plugin<this, webpack.WebpackPluginInstance>
    namedChunks(value: boolean): this
    namedModules(value: boolean): this
    nodeEnv(value: boolean | string): this
    noEmitOnErrors(value: boolean): this
    occurrenceOrder(value: boolean): this
    portableRecords(value: boolean): this
    providedExports(value: boolean): this
    removeAvailableModules(value: boolean): this
    removeEmptyChunks(value: boolean): this
    runtimeChunk(value: boolean | 'single' | 'multiple' | RuntimeChunk): this
    sideEffects(value: boolean): this
    splitChunks(value: SplitChunksOptions): this
    usedExports(value: boolean): this
  }

  interface RuntimeChunk {
    name: string | RuntimeChunkFunction
  }

  type RuntimeChunkFunction = (entryPoint: EntryPoint) => string

  type SplitChunksOptions = Record<string, any>

  type LoaderOptions = Record<string, any>

  export class Use<Parent = Rule>
    extends ChainedMap<Parent>
    implements Orderable
  {
    loader(value: string): this
    options(value: LoaderOptions): this

    tap(callback: (options: LoaderOptions) => LoaderOptions): this

    // Orderable
    before(name: string): this
    after(name: string): this
  }

  type DevTool =
    | 'eval'
    | 'inline-source-map'
    | 'cheap-eval-source-map'
    | 'cheap-source-map'
    | 'cheap-module-eval-source-map'
    | 'cheap-module-source-map'
    | 'eval-source-map'
    | 'source-map'
    | 'nosources-source-map'
    | 'hidden-source-map'
    | 'nosources-source-map'
    | '@eval'
    | '@inline-source-map'
    | '@cheap-eval-source-map'
    | '@cheap-source-map'
    | '@cheap-module-eval-source-map'
    | '@cheap-module-source-map'
    | '@eval-source-map'
    | '@source-map'
    | '@nosources-source-map'
    | '@hidden-source-map'
    | '@nosources-source-map'
    | '#eval'
    | '#inline-source-map'
    | '#cheap-eval-source-map'
    | '#cheap-source-map'
    | '#cheap-module-eval-source-map'
    | '#cheap-module-source-map'
    | '#eval-source-map'
    | '#source-map'
    | '#nosources-source-map'
    | '#hidden-source-map'
    | '#nosources-source-map'
    | '#@eval'
    | '#@inline-source-map'
    | '#@cheap-eval-source-map'
    | '#@cheap-source-map'
    | '#@cheap-module-eval-source-map'
    | '#@cheap-module-source-map'
    | '#@eval-source-map'
    | '#@source-map'
    | '#@nosources-source-map'
    | '#@hidden-source-map'
    | '#@nosources-source-map'
    | boolean

  type PluginClass<
    PluginType extends { apply: (...args: any[]) => void } =
      webpack.WebpackPluginInstance,
  > = new (...opts: any[]) => PluginType

  interface Orderable {
    before(name: string): this
    after(name: string): this
  }
}
