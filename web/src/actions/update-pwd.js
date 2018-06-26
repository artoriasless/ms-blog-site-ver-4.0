'use strict';

const updatePwd = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'UPDATE_PWD',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = updatePwd;
