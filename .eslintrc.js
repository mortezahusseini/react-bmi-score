module.exports = {
    env: { browser: true, es2021: true },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 12, sourceType: 'module' },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        indent: 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'object-curly-spacing': ['warn', 'always'],
        'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
        'no-alert': ['error'],
        'no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
        'max-len': ['warn', { code: 140, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
        '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],

        'react/button-has-type': ['warn'],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-key': 'error',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-boolean-value': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: { react: { version: 'detect' } },
};