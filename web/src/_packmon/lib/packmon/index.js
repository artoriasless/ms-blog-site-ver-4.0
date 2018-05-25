'use strict';

const startBundle = require('./start-bundle');
const startRebundle = require('./start-rebundle');
const cleanOutdate = require('./clean-outdate');
const _gulp = require('./_gulp');
const _webpack = require('./_webpack');

const packmon = {
    startBundle,
    startRebundle,
    cleanOutdate,
    build: function(_env, _opts, buildType) {
        const _this = this;
        const typeMap = {
            stylesheet: _this.bundleStylesheet,
            javascript: _this.bundleJavascript,
        };

        if (typeMap[buildType]) {
            _this.cleanOutdate();
            typeMap[buildType](_env, _opts);
        } else {
            _this.bundleStylesheet(_env, _opts);
            _this.bundleJavascript(_env, _opts);
        }
    },
    bundleStylesheet: function(_env, _opts) {
        if (_opts.entry.stylesheet.length > 0) {
            _gulp(_env, _opts);
        }
    },
    bundleJavascript: function(_env, _opts) {
        if (_opts.entry.javascript.length > 0) {
            _webpack(_env, _opts);
        }
    },
};

module.exports = packmon;
