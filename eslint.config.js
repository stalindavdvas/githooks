// eslint.config.js
export default [
    {
      ignores: ['node_modules/**'],
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 2021,
      },
      rules: {
        'no-unused-vars': 'warn',//error
        'no-console': 'off',//error
        // Añade más reglas que necesites aquí
      },
    },
  ];
  