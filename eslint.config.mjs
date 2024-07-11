import { ntnyq } from '@ntnyq/eslint-config'

export default ntnyq([
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-use-before-define': 'off',
    },
  },
])
