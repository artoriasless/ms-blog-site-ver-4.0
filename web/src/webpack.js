'use strict';
/* global __dirname process */
const staticVersion = require('./package.json').version;

const fs = require('fs');

const path = require('path');

const moment = require('moment');

const webpack = require('webpack');

const rimraf = require('rimraf');

const config = require('./webpack.config');
//  遍历某个文件夹，将其中所有文件导入到输出目录
const importFile = (distPath) => {
    const folderReg = /^(\w|-|_)+$/;
    const fileReg = /\.(jpg|png|gif|ttf)?$/;

    if (!fs.existsSync(`../public/${distPath}`)) {

        fs.mkdirSync(`../public/${distPath}`);
    }

    fs.readdirSync(distPath).forEach(name => {
        if (folderReg.test(name)) {
            importFile(`${distPath}/${name}`);
        } else if (fileReg.test(name)) {
            fs.writeFile(`../public/${distPath}/${name}`, fs.readFileSync(`${distPath}/${name}`));
        }
    });
};

/* eslint-disable */
webpack(config, (err, stats) => {
    //  导入图片（先移除原先导入的图片，避免文件重复）
    //  windows 环境下 rimraf 的文件删除指令失效，忽略
    if (process.env.OS === 'Windows_NT') {
        importFile('img');
        importFile('fonts');
    } else {
        rimraf('../public/img', () => {
            importFile('img');
        });
        rimraf('../public/fonts', () => {
            importFile('fonts');
        });
    }

    const startDate = moment(stats.startTime).format('YYYY-MM-DD HH:mm:ss');
    const endDate = moment(stats.endTime).format('YYYY-MM-DD HH:mm:ss');
    const compileTime = (stats.endTime - stats.startTime) / 1000;

    console.info('\x1b[36m%s\x1b[0m', '----- BUNDLE -----');
    console.info('\x1b[36m%s\x1b[0m', ` start time: ${startDate}`);
    console.info('\x1b[36m%s\x1b[0m', `   end time: ${endDate}`);
    console.info('\x1b[36m%s\x1b[0m', `bundle time: ${compileTime} s`);

    if (err) {
        console.info('----- ERROR -----');
        console.info('\x1b[36m%s\x1b[0m', err);
        console.info('-----------------');
    } else {
        const tempDate = new Date();
        const fileDist = path.resolve(__dirname, '../public');

        fs.writeFileSync(`${fileDist}/index.${staticVersion}.css`, fs.readFileSync(`${fileDist}/index.css`));
        fs.writeFileSync(`${fileDist}/index.${staticVersion}.js`, fs.readFileSync(`${fileDist}/index.js`));

        const ver_startDate = moment(tempDate).format('YYYY-MM-DD HH:mm:ss');
        const ver_endDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        const verCacheTime = (Date.parse(new Date()) - Date.parse(tempDate)) / 1000;

        console.info('\x1b[36m%s\x1b[0m', '----- VER CACHE -----');
        console.info('\x1b[36m%s\x1b[0m', ` start time: ${ver_startDate}`);
        console.info('\x1b[36m%s\x1b[0m', `   end time: ${ver_endDate}`);
        console.info('\x1b[36m%s\x1b[0m', ` cache time: ${verCacheTime} s`);
    }

    console.info('\x1b[36m%s\x1b[0m', '----- FINISH -----');

    return true;
});
/* eslint-disable */
