'use strict';

const stanAlert = require('/lib/common-stan-alert');

function resetPwdValidate(email) {
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const alertInfo = {
        title: 'Warning!',
        email: {
            null: 'please type the email address!',
            illegal: 'please type legal email address!',
        },
    };

    if (!email) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.email.null
        });

        return false;
    } else if (!emailReg.test(email)) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.email.illegal,
        });

        return false;
    }

    return true;
}

module.exports = resetPwdValidate;
