module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:prettier/recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        '@typescript-eslint/ban-types': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    overrides: [
        {
            'files': ['src/services/*.ts'],
            'rules': {
                '@typescript-eslint/no-unused-vars': 'off'
            }
        },
        {
            'files': ['src/services/core/*.ts'],
            'rules': {
                '@typescript-eslint/no-explicit-any': 'off'
            }
        }
    ]
}
