module.exports = {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
        ['@babel/plugin-proposal-decorators', {'legacy': true}],
        ['@babel/plugin-proposal-class-properties', {'loose': true}],
        ['@babel/plugin-proposal-private-property-in-object', { 'loose': true }],
        ['@babel/plugin-proposal-private-methods', { 'loose': true }]
    ]
};
