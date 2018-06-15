'use strict';

const initUserInfoDefault = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.cache = originalState.cache || {};
    newState.current = action.payload.current;
    newState.userInfo = action.payload.userInfo;
    if (newState.userInfo.id && newState.userInfo.email && newState.userInfo.password) {
        newState.cache.loginTag = true;
    } else {
        newState.cache.loginTag = false;
    }

    return newState;
};

module.exports = initUserInfoDefault;
