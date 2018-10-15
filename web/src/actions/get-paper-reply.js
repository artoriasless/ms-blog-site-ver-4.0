'use strict';

const getPaperReply = reply => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'GET_PAPER_REPLY',
        payload: {
            current,
            reply,
        },
    });
};

module.exports = getPaperReply;
