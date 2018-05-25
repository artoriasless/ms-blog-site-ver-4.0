'use strict';

const logger = require('../../util/logger');
const color = require('../../util/data-color');

function loggerError(err) {
    logger(color.title, '----- BUNDLE *.stylesheet ERROR -----');
    logger(color.error, err);
    logger(color.title, '-----------------', color.reset, '\n');
}

module.exports = loggerError;
