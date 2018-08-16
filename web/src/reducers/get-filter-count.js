'use strict';

const getFilterCount = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    console.info(action);

    return newState;
};

module.exports = getFilterCount;
