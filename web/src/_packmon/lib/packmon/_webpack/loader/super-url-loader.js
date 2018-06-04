'use strict';

function superUrlLoader() {
    var src = arguments[0];
    const  srcNoComment = src.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    //  用于修改路径解决 webpack 的寻址规则，兼容 gulp 的寻址规则
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
    //  获取根目录路径、当前源文件目录路径，获取当前文件目录深度，绝对路径修改为相对路径
    const rootDist = process.cwd();
    const fileDist = this.resourcePath;
    const distList = (fileDist.replace(rootDist, '').replace(/^\//, '')).split('/');
    const distLevel = distList.length - 1;
    //  获取文件、模块引用，匹配文件、模块引用
    const requireReg = /require\(([\S]+)\)/g;
    const importReg = /@import\(([\S]+)\)/g;
    const urlReg = /url\(([\S]+)\)/g;

    const requireArr = (srcNoComment.match(requireReg) || []).map(srcPath => {
        return {
            src: srcPath,
            file: srcPath.replace(/^require\(["']?/, '').replace(/["']?\)/, ''),
        };
    });
    const importArr = (srcNoComment.match(importReg) || []).map(srcPath => {
        return {
            src: srcPath,
            file: srcPath.replace(/^imoprt\(["']?/, '').replace(/["']?\)/, ''),
        };
    });
    const urlArr = (srcNoComment.match(urlReg) || []).map(srcPath => {
        return {
            src: srcPath,
            file: srcPath.replace(/^url\(["']?/, '').replace(/["']?\)/, ''),
        };
    });
    const pathArr = ([]).concat(requireArr, importArr, urlArr);

    if (!pathArr.length) {
        //  源文件没有任何文件、模块引用，直接返回
        return src;
    } else {
        pathArr.forEach(fileObj => {
            var tmpSrc = fileObj.src;
            var tmpFile = fileObj.file;

            if (fileObj.file[0] === '/') {
                //  路径以 '/' 开始，表示项目根目录开始，为自定义模块，根据源文件路径深度，替换为相对路径
                tmpFile = `${getRelativePath(distLevel)}${tmpFile.slice(1)}`;
                tmpSrc = fileObj.src.replace(fileObj.file, tmpFile);

                src = src.replace(fileObj.src, tmpSrc);
            }
        });

        return src;
    }
}

module.exports = superUrlLoader;
