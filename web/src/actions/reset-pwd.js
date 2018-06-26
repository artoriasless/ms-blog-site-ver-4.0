'use strict';

const resetPwd = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'RESET_PWD',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = resetPwd;
