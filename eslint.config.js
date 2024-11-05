import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';

export default [
  // 1. 继承 ESLint 的推荐配置
  eslint.configs.recommended,
  // 2. 继承 Prettier 配置
  eslintConfigPrettier,
  // 3. 自定义配置
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,vue}'],
    languageOptions: {
      parser: vue.parserServices,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // 定义全局变量
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      },
    },
    plugins: {
      vue,
      prettier,
    },
    rules: {
      // Vue 规则
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],

      // Prettier 规则
      'prettier/prettier': ['error', {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        trailingComma: 'es5',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      }],

      // JavaScript 规则
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
  // 4. 特定文件的配置
  {
    files: ['**/*.vue'],
    rules: {
      // Vue 文件特定规则
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',
    },
  },
  // 5. 测试文件的配置
  {
    files: ['**/*.{test,spec}.{js,ts}'],
    rules: {
      // 测试文件特定规则
      'no-unused-expressions': 'off',
    },
  },
];