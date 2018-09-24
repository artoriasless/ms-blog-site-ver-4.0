'use strict';

const user = require('./user');
const paper = require('./paper');
const reply = require('./reply');
const message = require('./message');
const catalogue = require('./catalogue');

const util = require('./util');

module.exports = {
    user,
    paper,
    reply,
    message,
    catalogue,

    util,
};
