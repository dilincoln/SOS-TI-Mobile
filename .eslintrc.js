module.exports = {
    env: {
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        camelcase: [
            'error',
            {
                allow: [
                    'finished_at',
                    'accept_at',
                    'created_at',
                    'updated_at',
                    'canceled_at',
                ],
            },
        ],
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src',
            },
        },
    },
}
