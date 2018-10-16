'use strict';

const submitReply = () => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'SUBMIT_REPLY',
        payload: {
            current,
            cache: {
                reply: {},
            },
        },
    });
};

module.exports = submitReply;
