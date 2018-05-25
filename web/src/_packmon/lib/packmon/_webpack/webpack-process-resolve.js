'use strict';

function webpackProcessAlias(_env, _opts) { //  eslint-disable-line
    const _alias = {};

    return _alias;
}

function webpackProcessResolve(_env, _opts) {
    const _resolve = {
        alias: webpackProcessAlias(_env, _opts),
    };

    return _resolve;
}

module.exports = webpackProcessResolve;
