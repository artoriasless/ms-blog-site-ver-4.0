'use strict';

const updateRegisterForm = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.cache = originalState.cache || {};
    newState.cache.register = action.payload.cache.register;

    return newState;
};

module.exports = updateRegisterForm;