const path = require('path');

module.exports = {
    mode: 'production',
    entry: './vue/dist/vue.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue.js'
    }
};