'use strict';
/* global process */
var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');

var PLUGIN_NAME = 'gulp-file-assets';

var ASSETS_RE = /([^'"# \(\)\?]+\.(EXT))\b/ig;

var defExts = [
    'js', 'css', 'html', 'tpl',
    'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp',
    'ttf', 'eot', 'otf', 'woff'
];

function getAvailableExts(includes, excludes) {
    var exts = [];
    for (var i = 0, l = includes.length; i < l; ++i) {
        var ext = includes[i];
        if (excludes.indexOf(ext) < 0) {
            exts.push(ext);
        }
    }
    return exts;
}

function getAbsolutePath(filename) {
    if (!path.isAbsolute(filename)) {
        filename = path.join(process.cwd(), filename);
    }
    return filename;
}

function isLocal(url) {
    return !/^(https?:)?\/\//.test(url);
}

function isIgnored(ignores, filename) {
    for (var i = 0, l = ignores.length; i < l; ++i) {
        var item = ignores[i];
        if (item instanceof RegExp) {
            if (item.test(filename)) {
                return true;
            }
        } else if (item === filename) {
            return true;
        }
    }
    return false;
}

function parseAssets(file, reference, curDepth, opts, push) {
    var depth = opts['depth'];
    var pattern = opts['pattern'];
    var ignores = opts['ignores'];
    var includeSrc = opts['includeSrc'];

    var fileBase = file.base;
    var filePath = file.path;
    var relative = file.relative;
    var contents = file.contents;

    if (isIgnored(ignores, filePath)) {
        return;
    }
    if (reference || includeSrc) {
        // gutil.log(PLUGIN_NAME + ':', 'Extract', (reference ? gutil.colors.green(reference) + ' -> ' : '') + gutil.colors.green(relative));
        ignores.push(filePath);
        push(file);
    }

    if (depth > 0 && curDepth >= depth) {
        return;
    }
    var code = contents.toString();
    if (new Buffer(code).length === contents.length) {
        code.replace(pattern, function ($, url) {
            if (!isLocal(url)) {
                return;
            }
            var files = [
                getAbsolutePath(path.join(fileBase, url)),
                // getAbsolutePath(path.join(path.dirname(filePath), url))
            ];
            // if (files[0] === files[1]) {
            //     files.pop();
            // }
            for (var i = 0, l = files.length; i < l; ++i) {
                var filename = files[i];

                if (fs.existsSync(filename)) {
                    var asset = new gutil.File({
                        path: filename,
                        base: fileBase,
                        contents: fs.readFileSync(filename)
                    });
                    parseAssets(asset, relative, curDepth + 1, opts, push);
                }
            }
        });
    }
}

function fileAssets(opts) {
    opts = opts || {};
    var depth = opts['depth'] || null;
    var exts = getAvailableExts(opts['exts'] || defExts, opts['excludes'] || []);
    var pattern = new RegExp(ASSETS_RE.source.replace('EXT', exts.join('|')), 'ig');
    var includeSrc = opts['includeSrc'] === undefined || opts['includeSrc'];
    var ignores = opts['ignores'];

    if (ignores) {
        ignores = ignores.concat();
        for (var i = 0, l = ignores.length; i < l; ++i) {
            var item = ignores[i];
            if (!(item instanceof RegExp)) {
                ignores[i] = getAbsolutePath(item);
            }
        }
    } else {
        ignores = [];
    }

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            return cb();
        } else if (file.isStream()) {
            cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
        } else if (file.isBuffer()) {
            parseAssets(file, null, 0, {
                depth: depth,
                pattern: pattern,
                ignores: ignores,
                includeSrc: includeSrc
            }, this.push.bind(this));
            cb();
        }
    });
}

fileAssets.defExts = defExts;

module.exports = fileAssets;
