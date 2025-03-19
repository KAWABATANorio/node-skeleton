import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    languageOptions: {
      globals: globals.node,
    }
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ['dist', 'doc'] },
  {
    files: ['**/*.ts'],
    plugins: {
      prettier,
    },
    rules: {
      ...prettier.configs.recommended.rules,
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-undef': 'off',
      indent: ['error', 2, { SwitchCase: 1, 'offsetTernaryExpressions': true }],
      'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 0, maxBOF: 0 }],
      quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'semi-spacing': ['error', { after: true, before: false }],
      'semi-style': ['error', 'first'],
      'no-extra-semi': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error'
    }
  },
]
