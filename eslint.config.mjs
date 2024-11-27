import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  typescript: {
    tsconfigPath: './tsconfig.json',
    overridesTypeAwareRules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off',
    },
  },
})
