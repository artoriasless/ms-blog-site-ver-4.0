'use strict';

const getMessage = message => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'GET_MESSAGE',
        payload: {
            current,
            message,
        },
    });
};

module.exports = getMessage;
