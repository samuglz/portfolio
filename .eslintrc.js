module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'comma-dangle': ['error', 'never'],
        'arrow-parens': ['error', 'as-needed'],
        semi: ['error', 'always']
    }
};
