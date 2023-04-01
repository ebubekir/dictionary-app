module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'import/extensions': ['off'],
    'import/no-unresolved': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-one-expression-per-line': ['off'],
    'react/function-component-definition': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/no-unstable-nested-components': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/button-has-type': ['off'],
    'react/prop-types': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/require-default-props': ['off'],
    'react/jsx-indent': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/jsx-curly-newline': ['off'],
    'object-curly-newline': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
  },
}
