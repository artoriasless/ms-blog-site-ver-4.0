'use strict';

const color = require('../util/data-color');
const logger = require('../util/logger');

function startBundle() {
    logger(color.info, '> packmon starts watching...', color.reset, '\n');
}

module.exports = startBundle;
