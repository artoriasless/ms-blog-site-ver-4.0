'use strict';

const stanAlert = require('/lib/common-stan-alert');

function submitValidate(formData) {
    const pwdReg = /^\S{10,18}$/;
    const alertInfo = {
        title: 'Warning!',
        original: {
            null: 'please type the original pwd!',
            illegal: 'please type legal pwd!<br/>pwd length from 10 to 16.',
        },
        modify: {
            null: 'please type the new pwd!',
            illegal: 'please type legal pwd!<br/>pwd length from 10 to 16.',
        },
        confirm: {
            null: 'please retype the pwd to check!',
            illegal: 'the pwd to confirm is inconsistent!'
        }
    };

    if (!formData.original) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.original.null,
        });

        return false;
    } else if (!pwdReg.test(formData.original)) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.original.illegal,
        });

        return false;
    } else if (!formData.modify) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.modify.null
        });

        return false;
    } else if (!pwdReg.test(formData.modify)) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.modify.illegal,
        });

        return false;
    } else if (!formData.confirm) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.confirm.null,
        });

        return false;
    } else if (formData.modify !== formData.confirm) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.confirm.illegal,
        });

        return false;
    }

    return true;
}

module.exports = submitValidate;
