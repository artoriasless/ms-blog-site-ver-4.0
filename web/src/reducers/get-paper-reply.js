'use strict';

const getPaperReply = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.reply = action.payload.reply;

    return newState;
};

module.exports = getPaperReply;
