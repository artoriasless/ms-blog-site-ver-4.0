'use strict';
/* global process */
function getGulpConfig(env, opts) {
    const rootDist = process.cwd();
    const config = {
        src: {
            options: {
                base: rootDist
            },
        },
        dest: {
            path: rootDist,
            options: {}
        },
        plugins: {
            cssImport: {
                transform: (fileDist, importDist) => {
                    const distList = (fileDist.replace(rootDist, '').replace(/^\//, '')).split('/');
                    const distLevel = distList.length - 1;
                    //  用于修改路径 fix 寻址规则，兼容 teleport 的寻址规则
                    const getRelativePath = (level) => {
                        if (level === 0) {
                            return './';
                        } else {
                            let relativePath = '';

                            for (let i = 0; i < level; i++) {
                                relativePath += '../';
                            }

                            return relativePath;
                        }
                    };
                    //  fix import 中的路径规则
                    if (importDist[0] === '/') {
                        //  路径以 '/' 开始，表示项目根目录开始，为自定义模块，根据源文件路径深度，替换为相对路径
                        importDist = `${getRelativePath(distLevel)}${importDist.slice(1)}`;
                    }
                    //  容错处理
                    const extReg = /\.(css|sass|less|postcss)$/;

                    if (!extReg.test(importDist)) {
                        importDist += '.css';
                    }

                    return importDist;
                },
                bundleType: opts.bundleType,
            },
            minify: {},
            fileAssets: {
                exts: [
                    'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp',
                    'ttf', 'eot', 'otf', 'woff', 'woff2'
                ]
            },
            dest: {
                directory: '../public',
                options: {
                    env,
                    version: opts.version,
                    entry: opts.entry.stylesheet
                },
            },
            sass: {},
            less: {},
            postcss: {
                plugins: [
                    require('postcss-conditionals')(),
                    require('postcss-simple-vars')(),
                    require('postcss-each')(),
                    require('postcss-for')(),
                    require('postcss-mixins')(),
                    require('postcss-import')(),
                    require('postcss-nested')(),
                    require('postcss-atroot')(),
                    require('postcss-cssnext')({
                        features: {
                            rem: false
                        }
                    }),
                    require('postcss-extend')(),
                ]
            },
        }
    };

    return config;
}

module.exports = getGulpConfig;
