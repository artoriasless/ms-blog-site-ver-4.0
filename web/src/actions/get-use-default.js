'use strict';

const getUserDefault = (data) => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'GET_USER_DEFAULT',
        payload: {
            current,
            data,
        },
    });
};

module.exports = getUserDefault;
