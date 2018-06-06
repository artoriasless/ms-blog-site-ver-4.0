'use strict';

const updateRegisterForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'REGISTER',
        payload: {
            current,
            cache: {
                register: formData,
            },
        },
    });
};

module.exports = updateRegisterForm;
