'use strict';

const updateLoginForm = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.cache = originalState.cache || {};
    newState.cache.login = action.payload.cache.login;

    return newState;
};

module.exports = updateLoginForm;
