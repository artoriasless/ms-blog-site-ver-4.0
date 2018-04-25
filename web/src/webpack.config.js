'use strict';
/* global __dirname */
/* eslint-disable */
const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssnext = require('postcss-cssnext');
const autoprefixer = require('autoprefixer');
/* eslint-disable */

const argumentArr = process.argv;
const env = argumentArr[argumentArr.length - 1];
const config = {
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.postcss$/,
                exclude: /node_modules/,
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
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        fallback: 'file-loader',
                        name: (filePath => filePath.split('/src/img/')[1]),
                        outputPath: 'img',
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    fallback: 'file-loader',
                    name: (filePath => filePath.split('/src/fonts/')[1]),
                    outputPath: 'fonts',
                }
            }
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: env,
        }),
        new ExtractTextPlugin('index.css'),
        new webpack.DefinePlugin({
            '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })',
        }),
    ]
};

if (env === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
