'use strict';
/* global __dirname */
const path = require('path');

function webpackProcessRules(_env, _opts) {
    const _rules = [];

    //  解析打包 react
    _rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        },
    });
    //  url(...) 、 require(...) 路径调整
    _rules.push({
        test: /\.js$/,
        use: {
            loader: path.resolve(__dirname, './loader/super-url-loader.js'),
            options: {
                bundleType: _opts.bundleType,
            }
        }
    });
    //  解析 tpl 模板文件
    _rules.push({
        test: /\.(tpl|html)$/,
        use: {
            loader: path.resolve(__dirname, './loader/tpl-loader.js'),
            options: {}
        }
    });
    //  忽略 define 的模块定义、引入方式
    _rules.push({
        parser: {
            amd: false
        }
    });

    return _rules;
}

function webpackProcessModule(_env, _opts) {
    const _module = {};

    _module.rules = webpackProcessRules(_env, _opts);

    return _module;
}

module.exports = webpackProcessModule;
