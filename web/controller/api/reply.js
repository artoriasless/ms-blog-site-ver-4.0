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
            data = await replyService.findMany(paperId);

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
    async create(ctx) {
        const user = ctx.session.user;
        const jsonData = ctx.request.body;
        var success = true;
        var message = 'add comment success!';
        var data = {};

        if (!user.id) {
            success = false;
            message = 'please login first!';
        } else {
            if (!user.isEnabled) {
                success = false;
                message = 'please activate your account first!';
            } else {
                data = await replyService.create({
                    userId: user.id,
                    paperId: Number(jsonData.paperId),
                    rootReplyId: Number(jsonData.rootReplyId),
                    replyId: Number(jsonData.replyId),
                    replyLevel: Number(jsonData.replyLevel),
                    content: jsonData.content,
                    replyDate: new Date(),
                });
                data = await replyService.update({
                    id: data.id,
                    rootReplyId: data.id,
                });
            }
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
    async update(ctx) {
        const user = ctx.session.user;
        const jsonData = ctx.request.body;
        var success = true;
        var message = 'edit comment success!';
        var data = {};

        if (!user.id) {
            success = false;
            message = 'please login first!';
        } else {
            const originalReply = await replyService.findById(Number(jsonData.id));

            if (!originalReply.id) {
                success = false;
                message = 'please pass right comment id!';
            } else {
                if (user.id !== originalReply.userId) {
                    success = false;
                    message = 'you cannot edit other\'s comment!';
                } else {
                    if (originalReply.content !== jsonData.content) {
                        originalReply.content = jsonData.content;
                        data = await replyService.update(originalReply);
                    }
                }
            }
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
