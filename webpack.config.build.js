const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {

    devtool: 'cheap-module-source-map',

    output: {
        library: 'OverlapWatch',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: webpackConfig.plugins.concat([

        new CleanWebpackPlugin(['dist'])
    ])

});
