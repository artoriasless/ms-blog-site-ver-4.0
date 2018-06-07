'use strict';

const actionTypes = require('./action-types');

const initUserInfoDefaultAction = require('./init-user-info-default');
const updateRegisterFormAction = require('./update-register-form');
const updateLoginFromAction = require('./update-login-form');
const registerAction = require('./register');
const loginAction = require('./login');

const actions = {
    actionTypes,

    initUserInfoDefaultAction,
    updateRegisterFormAction,
    updateLoginFromAction,
    registerAction,
    loginAction,
};

module.exports = actions;
