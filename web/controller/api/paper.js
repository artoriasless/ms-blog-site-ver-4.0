'use strict';

const service = require('../../../service');
const paperService = service.paper;

module.exports = {
    async filterCount(ctx) {
        const filterArr = [
            'tag', 'timeline', 'latest'
        ];
        const filterType = ctx.request.query.filterType || '';
        var success = true;
        var message = 'get filter success!';
        var data = {};

        if (!filterType || filterArr.indexOf(filterType) !== -1) {
            data = await paperService.filterCount(filterType);
        } else {
            success = false;
            message = 'get filter failed, please check the filer type is legal!';
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
