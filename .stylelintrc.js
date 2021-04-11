module.exports = {
  root: true,
  plugins: ['stylelint-prettier', 'stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-idiomatic-css',
    'stylelint-config-prettier'
  ],
  rules: {
    'prettier/prettier': [
      true,
      {
        parser: 'less',
      },
    ],
  },
}
