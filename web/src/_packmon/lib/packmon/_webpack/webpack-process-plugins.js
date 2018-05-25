'use strict';

const webpack = require('webpack');

function webpackProcessPlugins(_env, _opts) {   //  eslint-disable-line
    const _plugins = [
        new webpack.EnvironmentPlugin({
            NODE_ENV: _env,
        }),
    ];

    return _plugins;
}

module.exports = webpackProcessPlugins;
