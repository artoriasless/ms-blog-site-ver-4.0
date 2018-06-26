'use strict';

const resetPwd = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.cache = originalState.cache || {};
    newState.cache.isLogin = false;
    newState.current = action.payload.current;
    newState.userInfo = action.payload.userInfo;

    return newState;
};

module.exports = resetPwd;
