'use strict';

function webpackProcessEntry(_env, _opts) {
    const entryList = _opts.entry.javascript;
    const _entry = {};

    entryList.forEach(entryObj => {
        var fileName = Object.keys(entryObj)[0];
        var _fileName = fileName.replace(/\.[^./]+$/, '');

        _entry[_fileName] = [ entryObj[fileName] ];
    });

    return _entry;
}

module.exports = webpackProcessEntry;
