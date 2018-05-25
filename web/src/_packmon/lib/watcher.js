'use strict';
/* global process */
/**
 *  监听文件变化，实时打包的主入口
 *      开发环境下通过 chokidar 实时监听 stylesheet 和 javascript 文件变化
 *      *   放弃使用 nodemon 监听文件变化后重启进程 -> 效率太低
 *      *   放弃使用 webpack 热启动来实时监听文件变化 -> gulp.watch 会将该进程阻塞
 *      *   放弃使用 gulp.watch 监听文件变化 -> 文件夹删除会报错
 *      *   最终使用 chokidar 监听文件变化（基于原生 fs.watch）
 *          1.  监听文件变化不报错
 *          2.  后续增量构建时更灵活
 */
const fs = require('fs');
const chokidar = require('chokidar');

const env = process.env.NODE_ENV || 'development';
const rootPath = process.cwd();
const pkg = JSON.parse(fs.readFileSync(`${rootPath}/package.json`).toString());
const packmon = require('./packmon');
const getOpts = require('./util/get-packmon-opts');

function watcher() {
    //  初始化文件监听方法
    const watcher = chokidar.watch('./', {
        ignored: /(node_modules|_packmon)/,
        persistent: true
    });
    const rebundle = (filePath, fileStats, evtType) => {
        const opts = getOpts(pkg);
        const stylesheetReg = /\.(css|sass|less|postcss)$/;
        const javascriptReg = /\.(js|json|tpl|html)$/;

        if (evtType !== 'addDir' && evtType !== 'unlinkDir') {
            if (stylesheetReg.test(filePath)) {
                packmon.startRebundle('stylesheet');
                packmon.build(env, opts, 'stylesheet');
            }
            if (javascriptReg.test(filePath)) {
                packmon.startRebundle('javascript');
                packmon.build(env, opts, 'javascript');
            }
        }
    };
    //  文件、目录发生变化时的监听事件
    watcher
        .on('addDir', (_path_, _stats_) => {
            rebundle(_path_, _stats_, 'addDir');
        })
        .on('unlinkDir', (_path_, _stats_) => {
            rebundle(_path_, _stats_, 'unlinkDir');
        })
        .on('add', (_path_, _stats_) => {
            rebundle(_path_, _stats_, 'add');
        })
        .on('unlink', (_path_, _stats_) => {
            rebundle(_path_, _stats_, 'unlink');
        })
        .on('change', (_path_, _stats_) => {
            rebundle(_path_, _stats_, 'change');
        });
}

module.exports = watcher;
