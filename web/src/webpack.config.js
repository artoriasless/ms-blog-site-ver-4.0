'use strict';
/* global __dirname */
const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssnext = require('postcss-cssnext');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        'index.css': [
            path.resolve(__dirname, './app.postcss')
        ],
        'index.js': [
            path.resolve(__dirname, './app.js')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, '../public'),
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.(css|postcss)?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                            },
                        },
                        'postcss-loader',
                    ],
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
        }),
    ]
};
