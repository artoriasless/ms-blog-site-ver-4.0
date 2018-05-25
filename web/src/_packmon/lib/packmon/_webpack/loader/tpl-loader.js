'use strict';

function tplLoader() {
    const prefix = 'module.exports = ';
    let src = arguments[0].toString().trim();
    let _module;
    //  处理 html 源码，对单引号做转义
    src = src.replace(/'/g, '\\\'');

    _module = `${prefix}'${src}'`;

    return _module;
}

module.exports = tplLoader;
