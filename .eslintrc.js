module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    ],
    'arrow-body-style': 0,
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': ['error'],
    camelcase: 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/button-has-type': 0,
    'react/jsx-fragments': 0,
  },
}
