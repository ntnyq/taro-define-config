# Repository Guidelines

## Project Structure & Module Organization

`taro-define-config` provides a typed `defineConfig` helper for Taro. Most changes concern configuration types; the runtime helper returns its input unchanged.

- `src/index.ts`: public API, overloads, and type exports.
- `src/config/`: shared configuration and compiler types; `platforms/`, `plugins/`, and `packages/` contain platform, plugin, and dependency option definitions.
- `src/utils.ts`: reusable utility types.
- `tests/index.test-d.ts`: public API type assertions.
- `dist/`: generated ESM/CommonJS bundles and declarations; never edit directly.
- `.github/workflows/`: CI, autofix, and release automation.

## Build, Test, and Development Commands

Use the pnpm version pinned in `package.json` and Node LTS as specified by `.node-version`. Run commands from the repository root:

- `pnpm install --frozen-lockfile`: install locked dependencies.
- `pnpm build`: build both module formats and declarations with tsdown.
- `pnpm test`: run Vitest with type checking enabled and watch disabled.
- `pnpm typecheck`: run `tsc --noEmit`.
- `pnpm lint`: check code with Oxlint.
- `pnpm format`: format files with Oxfmt; `pnpm format:check` checks without modifying them.

Build before type checking or testing because tests import the package through its generated exports. Follow CI order: format check, build, lint, typecheck, test. CI tests Node 22, 24, and 26.

## Coding Style & Naming Conventions

Use strict TypeScript, two-space indentation, LF endings, single quotes, no semicolons, and trailing commas. Oxfmt uses an 80-column print width. Follow neighboring files: PascalCase types/interfaces, camelCase functions, dependency-style filenames such as `webpack-dev-server.ts`, and existing plugin names such as `vueDevtools.ts`.

Use type-only imports where appropriate. Add definitions to the relevant configuration directory and re-export through its `index.ts`. Preserve overload inference, documented options, and plugin declaration merging. Husky runs nano-staged formatting and lint fixes before commits.

## Testing Guidelines

Add `*.test-d.ts` tests using Vitest's `expectTypeOf` for public type changes. Cover affected object, function, async, platform, and plugin configurations. Validate custom plugin extensions when modifying plugin maps. No numeric coverage threshold is configured.

## Commit & Pull Request Guidelines

Follow the Conventional Commit style in history, such as `fix(deps): bump all deps to latest` and `chore: release v0.15.1`. Keep changes focused. PR descriptions should explain the affected configuration behavior, link relevant issues, and list validation commands and results. Update README examples when public usage changes.
