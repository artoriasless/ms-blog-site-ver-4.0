'use strict';

const { actionTypes } = require('../actions');

const getUserDefaultFunc = require('./get-user-default');
const updateRegisterFormFunc = require('./update-register-form');
const updateLoginFormFunc = require('./update-login-form');
const registerFunc = require('./register');
const loginFunc = require('./login');

const reducers = (state = {}, action = {}) => {
    switch (action.type) {
    case actionTypes.GET_USER_DEFAULT:
        return getUserDefaultFunc(state, action);

    case actionTypes.UPDATE_REGISTER_FORM:
        return updateRegisterFormFunc(state, action);

    case actionTypes.UPDATE_LOGIN_FORM:
        return updateLoginFormFunc(state, action);

    case actionTypes.REGISTER:
        return registerFunc(state, action);

    case actionTypes.LOGIN:
        return loginFunc(state, action);

    default:
        return state;
    }
};

module.exports = reducers;

/*

    ==========  define state  ==========

    {
        currentPage: 'home',
        filter: {
            ···
        },
        paper: {

        },
        userInfo: {
            ···
        },
        reply: {
            ···
        },
        cache: {
            ···
        }
    }

*/
