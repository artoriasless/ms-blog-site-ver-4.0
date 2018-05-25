'use strict';

const bundleDefault = require('./bundle-default');
const bundleSass = require('./bundle-sass');
const bundleLess = require('./bundle-less');
const bundlePostcss = require('./bundle-postcss');
//  定义是否需要 stylesheet 预处理的打包任务
const tasks = {
    init: function(env, packmonConfig) {
        const stylesheetOpts = packmonConfig.options.stylesheet;

        if (stylesheetOpts.preprocessor === 'sass') {
            this._sass(env, packmonConfig);

            return 'bundle-sass';
        } else if (stylesheetOpts.preprocessor === 'less') {
            this._less(env, packmonConfig);

            return 'bundle-less';
        } else if (stylesheetOpts.preprocessor === 'postcss') {
            this._postcss(env, packmonConfig);

            return 'bundle-postcss';
        } else {
            this._default(env, packmonConfig);

            return 'bundle-default';
        }
    },
    _default: bundleDefault,
    _sass: bundleSass,
    _less: bundleLess,
    _postcss: bundlePostcss,
};

module.exports = tasks;
