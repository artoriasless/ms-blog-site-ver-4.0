'use strict';

var path = require('path');
var utils = require('./utils');
var destAssets = require('./dest-assets');

module.exports = function destPath(dest, fn, options) {
    function mapPath2File(entry) {
        var _entry = {};

        entry.forEach(entryObj => {
            var fileName = Object.keys(entryObj)[0];

            _entry[entryObj[fileName]] = fileName;
        });

        return _entry;
    }

    if (typeof fn !== 'function') {
        options = fn;
        fn = null;
    }

    if (typeof dest !== 'string') {
        options = dest;
        dest = '.';
    }

    return utils.through.obj(function (file, enc, cb) {
        var opts = utils.extend({}, options);
        var parsed = utils.extend(utils.parse(file.path), opts);
        if (typeof fn === 'function') {
            parsed = fn(parsed, file);
        }
        var entry = mapPath2File(opts.entry);

        try {
            if (dest.indexOf(':') !== -1) {
                var interpolate = utils.placeholders(opts);
                file.path = interpolate(dest, parsed);
            } else {
                //  对入口文件及输出文件做调整，根据入口文件定义来
                if (entry[file.path]) {
                    var tmpPath = file.path;

                    tmpPath = tmpPath.replace(/[^./]+\.(css|sass|less|postcss)$/, entry[file.path]);

                    if (opts.env !== 'development') {
                        tmpPath = tmpPath.replace(/\.css$/, `.${opts.version}.css`);
                    }

                    file.path = tmpPath;
                }

                var stylesheetExtReg = /\.(css|sass|less|postcss)/;
                // get the new dest extension based on the engine extension
                var ext = opts.ext || opts.extname || path.extname(file.path);
                var name = opts.basename || file.relative;
                var base = opts.base || opts.dirname || file.base;
                //  如果为样式文件，统一输出为 *.css
                if (stylesheetExtReg.test(ext)) {
                    ext = '.css';
                }
                // calculate the new destination path
                file.path = utils.rewrite(path.join(base, dest, name), ext);
            }

            this.push(file);
        } catch (err) {
            this.emit('error', new utils.gutil.PluginError('gulp-dest', err));
        }

        return cb();
    });
};
