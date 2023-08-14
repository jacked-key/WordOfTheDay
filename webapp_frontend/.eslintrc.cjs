/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
  },
  // All eslint rules are documented here: https://eslint.org/docs/latest/rules/
  // All @typescript-eslint rules are documented here: https://typescript-eslint.io/rules/
  rules: {
    //forbid `for` loops that use index interation when `for of` syntax is sufficient
    '@typescript-eslint/prefer-for-of': 'error',

    // enforce typing on all function declaration (though expressions may be implicit)
    '@typescript-eslint/explicit-function-return-type': 'error',

    // forbid the use of the `any` type as we shuold be using explicit type declaration
    '@typescript-eslint/no-explicit-any': 'error',

    // forbid unused imports
    '@typescript-eslint/no-unused-vars': 'error',

    // turning this rule off
    '@typescript-eslint/no-empty-interface': 'off',

    // (This base rule must be disabled when using the above rule)
    'no-used-vars': 'off',

    // forbid trailing whitespaces
    'no-trailing-spaces': 'error',

    // prefer singel quotes except when escaping is used
    // 'avoidEscape' permits using a different quote character that
    // avoids the needs to escape another quote character
    // e.g. Allows for "hello 'world'"
    quotes: ['error', 'single', { avoidEscape: true }],

    // prefer `const` keyword over `let`
    'prefer-const': 'error',

    // forbid the use of 'var'...trust me
    'no-var': 'error',

    // enforce use of === and !===
    // never perform comparisons relying on type coercion
    eqeqeq: 'error',

    // enforce that variables are defined in the block-scope
    // they are used, emulating C-style scope
    'block-scoped-var': 'error',
    // enforces naming conventions. Change as needed
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['interface', 'class', 'typeAlias', 'typeMethod', 'enum'],
        format: ['PascalCase'],
      },
      {
        selector: ['typeProperty'],
        format: ['camelCase'],
      },
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/prefer-readonly': 'error',
  },
};
