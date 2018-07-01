'use strict';

const service = require('../../../service');
const messageService = service.message;

module.exports = {
    async page(ctx) {
        const user = ctx.session.user || {};
        const jsonData = ctx.request.query;
        var success = true;
        var message = 'get message success!';
        var data = {};

        if (!user.id) {
            success = false;
            message = 'please login first!';
        } else {
            const where = {
                userId: user.id,
                isDeleted: 0,
            };
            const page = Number(jsonData.page) || 1;

            data = await messageService.page(where, page);
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
