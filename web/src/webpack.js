'use strict';
/* global __dirname process */
const staticVersion = require('./package.json').version;

const fs = require('fs');

const path = require('path');

const moment = require('moment');

const webpack = require('webpack');

const config = require('./webpack.config');

/* eslint-disable */
webpack(config, (err, stats) => {
    if (err) {
        console.info('----- ERROR -----');
        console.info('\x1b[36m%s\x1b[0m', err);
        console.info('-----------------');
    } else {
        /* 打包时的错误信息：语法等 */
        const errors = stats.compilation.errors;
        if (Object.keys(errors).length > 0) {
            console.info('\x1b[36m%s\x1b[0m', '----- ERROR -----');
            console.info(errors);
        }
        /* 打包信息：耗时、起止时间 */
        const startDate = moment(stats.startTime).format('YYYY-MM-DD HH:mm:ss');
        const endDate = moment(stats.endTime).format('YYYY-MM-DD HH:mm:ss');
        const compileTime = (stats.endTime - stats.startTime) / 1000;

        console.info('\x1b[36m%s\x1b[0m', '----- BUNDLE -----');
        console.info('\x1b[36m%s\x1b[0m', ` start time: ${startDate}`);
        console.info('\x1b[36m%s\x1b[0m', `   end time: ${endDate}`);
        console.info('\x1b[36m%s\x1b[0m', `bundle time: ${compileTime} s`);
        /* 静态资源添加版本号信息，击穿缓存 */
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
