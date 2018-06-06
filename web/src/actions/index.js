'use strict';

const actionTypes = require('./action-types');

const getUserDefaultAction = require('./get-use-default');
const updateRegisterFormAction = require('./update-register-form');
const updateLoginFromAction = require('./update-login-form');
const registerAction = require('./register');
const loginAction = require('./login');

const actions = {
    actionTypes,

    getUserDefaultAction,
    updateRegisterFormAction,
    updateLoginFromAction,
    registerAction,
    loginAction,
};

module.exports = actions;
