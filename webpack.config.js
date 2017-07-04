var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/index.js',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    }
};