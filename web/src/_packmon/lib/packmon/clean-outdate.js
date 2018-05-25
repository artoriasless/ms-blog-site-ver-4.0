'use strict';
/* global process */
const fs = require('fs');
const path = require('path');

function cleanOutdate() {
    const rootDist = process.cwd();
    const stylesheetFilePath = path.resolve(rootDist, '../public/index.css');
    const javascriptFilePath = path.resolve(rootDist, '../public/index.js');

    if (fs.existsSync(stylesheetFilePath)) {
        fs.unlinkSync(stylesheetFilePath);
    }
    if (fs.existsSync(javascriptFilePath)) {
        fs.unlinkSync(javascriptFilePath);
    }
}

module.exports = cleanOutdate;
