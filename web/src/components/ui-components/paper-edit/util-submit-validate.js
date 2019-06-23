'use strict';

const stanAlert = require('/lib/common-stan-alert');

function submitValidate(submitType, formData) {
    const title = 'Warning!';
    const alertInfo = {
        id: {
            null: 'paper id can\'t be null while editing paper!',
            illegal: 'paper id must be digital value!',
        },
        title: {
            null: 'paper title can\'t be null!',
        },
        tag: {
            null: 'paper tag can\'t be null!',
        },
        brief: {
            null: 'paper brief can\'t be null!',
        },
        content: {
            null: 'paper content can\'t be null!',
        },
    };

    if (submitType === 'EDIT') {
        if (!formData.id) {
            stanAlert({
                title,
                content: alertInfo.id.null,
            });

            return false;
        }
        if (isNaN(Number(formData.id))) {
            stanAlert({
                title,
                content: alertInfo.id.illegal,
            });

            return false;
        }
    }

    if (!formData.title) {
        stanAlert({
            title,
            content: alertInfo.title.null,
        });

        return false;
    }

    if (!formData.tag) {
        stanAlert({
            title,
            content: alertInfo.tag.null,
        });

        return false;
    }

    if (!formData.brief) {
        stanAlert({
            title,
            content: alertInfo.brief.null,
        });

        return false;
    }

    if (!formData.content) {
        stanAlert({
            title,
            content: alertInfo.content.null,
        });

        return false;
    }

    return true;
}

module.exports = submitValidate;
