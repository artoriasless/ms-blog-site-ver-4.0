'use strict';

const logger = require('../util/logger');
const color = require('../util/data-color');

function startRebundle(bundleType) {
    logger(color.info, `> packmon start rebundling for ${bundleType} file(s) changed...`, color.reset, '\n');
}

module.exports = startRebundle;
