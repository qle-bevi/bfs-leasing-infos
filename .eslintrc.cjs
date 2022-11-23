module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:astro/recommended'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
      }
    },
    {
      files: ['.jsx', '.tsx'],
      extends: [
        'plugin:react/recommended'
      ],
      plugins: [
        'react'
      ],
      rules: {
        'react/jsx-wrap-multilines': [2, {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'ignore',
          logical: 'ignore',
          prop: 'ignore'
        }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [1, 2]
      }
    }
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': [1, 2],
    'no-tabs': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/triple-slash-reference': 'off'
  }
}
