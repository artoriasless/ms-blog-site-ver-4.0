'use strict';

const { actionTypes } = require('../actions');

const initHomeFunc = require('./init-home');

const getUserDefault = require('./get-user-default');

const reducers = (state = {}, action = {}) => {
    switch (action.type) {
    case actionTypes.INIT_HOME:
        return initHomeFunc(state, action);
    case actionTypes.GET_USER_DEFAULT:
        return getUserDefault(state, action);
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
        }，
    }

*/
