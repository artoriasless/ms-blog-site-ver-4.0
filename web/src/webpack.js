'use strict';

const moment = require('moment');

const webpack = require('webpack');

const config = require('./webpack.config');
/* eslint-disable */
webpack(config, (err, stats) => {
    const startDate = moment(stats.startTime).format('YYYY-MM-DD HH:mm:ss');
    const endDate = moment(stats.endTime).format('YYYY-MM-DD HH:mm:ss');
    const compileTime = (stats.endTime - stats.startTime) / 1000;

    console.info('\x1b[36m%s\x1b[0m', '----- BUNDLE -----');
    console.info('\x1b[36m%s\x1b[0m', ` start time: ${startDate}`);
    console.info('\x1b[36m%s\x1b[0m', `   end time: ${endDate}`);
    console.info('\x1b[36m%s\x1b[0m', `bundle time: ${compileTime} s`);
    console.info('\x1b[36m%s\x1b[0m', '------------------');

    if (err) {
        console.info('----- ERROR -----');
        console.info('\x1b[36m%s\x1b[0m', err);
        console.info('-----------------');
    }

    return true;
});
/* eslint-disable */
