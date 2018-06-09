'use strict';

const actionTypes = require('./action-types');

const initUserInfoDefaultAction = require('./init-user-info-default');
const updateRegisterFormAction = require('./update-register-form');
const updateLoginFromAction = require('./update-login-form');
const registerAction = require('./register');
const loginAction = require('./login');
const logoutAction = require('./logout');

const actions = {
    actionTypes,

    initUserInfoDefaultAction,
    updateRegisterFormAction,
    updateLoginFromAction,
    registerAction,
    loginAction,
    logoutAction,
};

module.exports = actions;
