'use strict';

const service = require('../../../service');
const catalogueService = service.message;

module.exports = {
    async page(ctx) {
        const jsonData = ctx.request.query;
        var success = true;
        var message = 'get catalogue success!';
        var data = {};

        const where = jsonData.filter;
        const page = Number(jsonData.page) || 1;

        data = await catalogueService.page(where, page);

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
