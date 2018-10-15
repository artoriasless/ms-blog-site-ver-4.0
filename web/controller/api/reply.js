'use strict';

const service = require('../../../service');
const replyService = service.reply;

module.exports = {
    async findMany(ctx) {
        const paperId = Number(ctx.request.query.paperId);
        var success = true;
        var message = 'get reply success!';
        var data = {};

        if (isNaN(paperId)) {
            success = false;
            message = 'please pass correct paper id!';
        } else {
            data = await replyService.findMany(paperId, ctx.session.user || {});

            data.map(replyItem => {
                if (replyItem.isDeleted !== 0) {
                    replyItem.content = '';
                }

                replyItem.userInfo = replyItem.User;

                delete replyItem.User;

                return replyItem;
            });
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
