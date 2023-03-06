module.exports = {
  extends: ['./node_modules/gts/'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'node/no-extraneous-import': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
