'use strict';
/* global process */
/**
 *  根据 pkg 文件，生成的 packmon 配置的方法
 */
const _ = require('lodash');

function getPackmonOpts(pkg) {
    const rootDist = process.cwd();
    const packmon = pkg.packmon || {};
    //  处理入口文件列表
    const packmonEntry = packmon.entry || {};
    const entry = (entryObj => {
        const stylesheetReg = /\.(css|sass|less|postcss)$/;
        const javascriptReg = /\.(js|json|tpl|html)$/;
        const _entry = {
            javascript: [],
            stylesheet: [],
        };

        for (var fileName in entryObj) {
            var _obj = {};

            _obj[fileName] = `${rootDist}/${entryObj[fileName]}`;

            if (stylesheetReg.test(fileName)) {
                _entry.stylesheet.push(_obj);
            } else if (javascriptReg.test(fileName)) {
                _entry.javascript.push(_obj);
            }
        }

        return _entry;
    })(packmonEntry);
    //  merge 扩展配置项
    const packmonExternal = packmon.optional || {};
    const defaultExternal = {
        javascript: {
            ecmaVersion: 5,
        },
        stylesheet: {
            preprocessor: false,
        },
    };
    const external = ((ext_1, ext_2) => {
        const _external = _.merge(ext_1, ext_2);
        const jsConfig = _external.javascript;
        const cssConfig = _external.stylesheet;
        //  fix ecmaVersion
        const ecmaVersionMap = {
            '5': 5,
            '6': 6,
            '2015': 6,
            '7': 7,
            '2016': 7,
            '8': 8,
            '2017': 8,
        };
        //  检查输入的 ecma 版本是否合乎逻辑
        //  输入的 ecma 版本未记录在 map 中时，默认使用 ES5
        _external.javascript.ecmaVersion = ecmaVersionMap[jsConfig.ecmaVersion] || 5;
        //  fix preprocessor
        const stylesheetMap = {
            'css': false,
            'sass': true,
            'less': true,
            'postcss': true,
        };
        //  检查是否需要使用 css 预处理
        _external.stylesheet.preprocessor = stylesheetMap[cssConfig.preprocessor] ? cssConfig.preprocessor : false;

        return _external;
    })(defaultExternal, packmonExternal);

    const options = {
        version: pkg.version,
        entry,
        options: external,
    };

    return options;
}

module.exports = getPackmonOpts;
