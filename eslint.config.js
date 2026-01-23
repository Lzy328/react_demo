// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],   // ← 只针对 ts/tsx
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': pluginTs
    },
    rules: {
      ...pluginTs.configs.recommended.rules,
      /* 你的规则 */
    }
  },
  {
    ignores: ['dist', 'node_modules', 'vite.config.ts']
  }
]