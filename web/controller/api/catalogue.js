'use strict';

const service = require('../../../service');

const catalogueService = service.catalogue;

module.exports = {
    async page(ctx) {
        const jsonData = ctx.request.query;
        var success = true;
        var message = 'get catalogue success!';
        var data = {};

        const where = ((type, param) => {
            var _where;

            switch(type) {
            case 'ALL':
                _where = {};
                break;
            case 'TAG':
                _where = {
                    tag: param,
                };
                break;
            case 'TIMELINE':
                _where = {
                    year_tag: param,
                };
                break;
            default:
                _where = {};
            }

            return _where;
        })(jsonData.filterType, jsonData.filterParam);
        const page = Number(jsonData.page) || 1;

        data = await catalogueService.page(where, page);

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
