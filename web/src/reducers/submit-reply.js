'use strict';

const submitReply = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.cache = originalState.cache || {};
    newState.cache.reply = action.payload.cache.reply;

    return newState;
};

module.exports = submitReply;