const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './vue/vue.js',
        vue: './vue/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js'
    }
};