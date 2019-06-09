'use strict';

const updatePwdForm = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.cache = originalState.cache || {};
    newState.cache.pwd = action.payload.cache.pwd;

    return newState;
};

module.exports = updatePwdForm;