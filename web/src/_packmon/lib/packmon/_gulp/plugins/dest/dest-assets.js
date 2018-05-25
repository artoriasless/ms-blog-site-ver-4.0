'use strict';
/* global process */
/*
    将静态资源（字体、图片）异步输出，提高效率
*/
const fs = require('fs');

const destAssets = (file) => {
    const rootDist = process.cwd();
    const destPath = file.path;
    const distList = (destPath.replace(rootDist, '')).split('/').slice(0, -1);

    for (let i = 0; i < distList.length; i++) {
        let dist = distList.slice(0, i + 1).join('/');

        if (dist && !fs.existsSync(`${rootDist}/${dist}`)) {
            fs.mkdirSync(`${rootDist}/${dist}`);
        }
    }
    fs.writeFile(destPath, file._contents);
};

module.exports = destAssets;
