module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:prettier/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        'no-underscore-dangle': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-undef': 'warn'
    }
};
