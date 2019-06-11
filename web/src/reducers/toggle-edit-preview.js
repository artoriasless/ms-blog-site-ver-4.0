'use strict';

const toggleEditPreview = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.editPaper = newState.editPaper || {};
    newState.editPaper.operateType = action.payload.operateType;

    return newState;
};

module.exports = toggleEditPreview;