// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  perfectionist: {
    overridesTypesRules: {
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-modules': 'off',
    },
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
    overridesTypeAwareRules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off',
    },
  },
})
