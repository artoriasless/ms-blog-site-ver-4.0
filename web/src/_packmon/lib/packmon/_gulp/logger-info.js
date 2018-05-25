'use strict';

const moment = require('moment');

const logger = require('../../util/logger');
const color = require('../../util/data-color');

function loggerInfo(start, end) {
    const startDate = moment(start).format('YYYY-MM-DD HH:mm:ss');
    const endDate = moment(end).format('YYYY-MM-DD HH:mm:ss');
    const compileTime = (end - start) / 1000;

    logger(color.title, '----- BUNDLE *.stylesheet -----');
    logger(color.text, ` start time: ${startDate}`);
    logger(color.text, `   end time: ${endDate}`);
    logger(color.text, `bundle time: ${compileTime} s`);
    logger(color.title, '----- FINISH BUNDLE *.stylesheet -----', color.reset, '\n');
}

module.exports = loggerInfo;
