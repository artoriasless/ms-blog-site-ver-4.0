'use strict';

const getPaper = paper => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'GET_PAPER',
        payload: {
            current,
            paper,
        },
    });
};

module.exports = getPaper;
