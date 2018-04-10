'use strict';

const actionTypes = require('./action-types');

const initHomeAction = require('./init-home');
const initLoginModalAction = require('./init-login-modal');

const actions = {
    actionTypes,

    initLoginModalAction,

    initHomeAction,
};

module.exports = actions;
