'use strict';

const updateUserInfoForm = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.cache = originalState.cache || {};
    newState.cache.userInfo = action.payload.cache.userInfo;

    return newState;
};

module.exports = updateUserInfoForm;