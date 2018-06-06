'use strict';

const updateLoginForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'LOGIN',
        payload: {
            current,
            cache: {
                login: formData,
            },
        },
    });
};

module.exports = updateLoginForm;
