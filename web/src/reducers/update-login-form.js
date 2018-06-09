'use strict';

const _ = require('lodash');

const updateLoginForm = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.cache.login = action.payload.cache.login;

    return newState;
};

module.exports = updateLoginForm;
