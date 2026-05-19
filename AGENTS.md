# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Purpose

- This package is a TypeScript-first config helper for Taro.
- The codebase is primarily type definitions and type-level API design, not runtime features.
- Public API entrypoint: [src/index.ts](src/index.ts).

For user-facing usage and package overview, see [README.md](README.md).

## Environment And Tooling

- Package manager: `pnpm` (see [package.json](package.json)).
- Node version policy: `lts-latest` (see [.node-version](.node-version)).
- Formatting: `oxfmt` (see [.oxfmtrc.jsonc](.oxfmtrc.jsonc)).
- Linting: `oxlint` (see [.oxlintrc.jsonc](.oxlintrc.jsonc)).
- Type checking: `tsgo --noEmit`.
- Build: `tsdown` (see [tsdown.config.ts](tsdown.config.ts)).
- Tests: Vitest type tests (see [vitest.config.ts](vitest.config.ts)).

## Common Commands

Run from repository root:

- `pnpm install --frozen-lockfile`
- `pnpm run build`
- `pnpm run format`
- `pnpm run format:check`
- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run test`

Before proposing final changes, prefer running:

1. `pnpm run format`
2. `pnpm run lint`
3. `pnpm run typecheck`
4. `pnpm run test`

## Architecture Map

- Core API and overloads: [src/index.ts](src/index.ts).
- Top-level config model: [src/config/index.ts](src/config/index.ts).
- Compiler-specific types: [src/config/compiler.ts](src/config/compiler.ts).
- Platform configs: [src/config/platforms/index.ts](src/config/platforms/index.ts).
- Package and loader option types: [src/config/packages/index.ts](src/config/packages/index.ts).
- Plugin option maps and extension points: [src/config/plugin.ts](src/config/plugin.ts), [src/config/plugins/index.ts](src/config/plugins/index.ts).
- Utility types: [src/utils.ts](src/utils.ts).
- Type-level regression tests: [tests/index.test-d.ts](tests/index.test-d.ts).

## Editing Rules

- Preserve existing export structure and naming conventions; this package is consumed for type inference.
- Keep changes minimal and focused; avoid broad refactors unless required.
- Prefer adding new config domains in dedicated files under [src/config/packages/](src/config/packages/) or [src/config/plugins/](src/config/plugins/) and re-exporting via the relevant `index.ts`.
- When adding plugin support, update the official plugin map in [src/config/plugin.ts](src/config/plugin.ts) and validate declaration-merge compatibility in tests.
- When adding platform or compiler variants, update the appropriate unions/interfaces and add type tests.
- Do not introduce runtime logic unless intentionally changing public runtime behavior of `defineConfig`.

## Testing Expectations

- Add or update type assertions in [tests/index.test-d.ts](tests/index.test-d.ts) for any public type change.
- Cover object config, function config, async config, and affected platform/plugin branches when relevant.
- Treat successful `typecheck` and `test` as mandatory for type API changes.

## CI And Release Awareness

- CI checks and test matrix: [.github/workflows/ci.yml](.github/workflows/ci.yml).
- Autofix behavior on push/PR: [.github/workflows/autofix.yml](.github/workflows/autofix.yml).
- Tagged release flow: [.github/workflows/release.yml](.github/workflows/release.yml).

Keep local changes aligned with CI order: format check, build, lint, typecheck, then test.
