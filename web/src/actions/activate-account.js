'use strict';

const activateAccount = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'ACTIVATE_ACCOUNT',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = activateAccount;
