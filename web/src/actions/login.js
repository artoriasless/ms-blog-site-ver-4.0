'use strict';

const login = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'LOGIN',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = login;
