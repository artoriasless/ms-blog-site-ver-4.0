'use strict';

const toggleEditPreview = (operateType = 'editing') => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'TOGGLE_EDIT_PREVIEW',
        payload: {
            current,
            operateType,
        },
    });
};

module.exports = toggleEditPreview;
