'use strict';
/* global process */
const path = require('path');

function webpackProcessOutput(_env, _opts) {    //  eslint-disable-line
    const rootDist = process.cwd();
    const _output = {
        filename: function() {
            if (_env === 'development') {
                return '[name].js';
            } else {
                return `[name].${_opts.version}.js`;
            }
        },
        path: path.resolve(rootDist, '../public'),
    };

    return _output;
}

module.exports = webpackProcessOutput;
