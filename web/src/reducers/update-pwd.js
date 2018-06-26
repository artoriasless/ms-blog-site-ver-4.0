'use strict';

const updatePwd = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.cache = originalState.cache || {};
    newState.cache.isLogin = true;
    newState.current = action.payload.current;
    newState.userInfo = action.payload.userInfo;

    return newState;
};

module.exports = updatePwd;
