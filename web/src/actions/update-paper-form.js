'use strict';

const updatePaperForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'UPDATE_PAPER_FORM',
        payload: {
            current,
            cache: {
                paper: formData,
            },
        },
    });
};

module.exports = updatePaperForm;
