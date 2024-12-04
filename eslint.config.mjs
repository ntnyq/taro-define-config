import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  jsdoc: {
    overrides: {
      'jsdoc/check-tag-names': [
        'error',
        {
          definedTags: ['compatibility', 'category', 'experimental'],
        },
      ],
    },
  },
  perfectionist: {
    overridesTypesRules: {
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-modules': 'off',
    },
  },
  typescript: {
    overridesTypeAwareRules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off',
    },
    tsconfigPath: './tsconfig.json',
  },
})
