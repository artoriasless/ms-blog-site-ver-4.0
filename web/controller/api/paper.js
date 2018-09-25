'use strict';

const service = require('../../../service');
const paperService = service.paper;

module.exports = {
    async findOne(ctx) {
        const paperId = Number(ctx.params.paperId);
        var success = true;
        var message = 'get paper success!';
        var data = {};

        if (!isNaN(paperId)) {
            data = await paperService.findById(paperId);
        } else {
            success = false;
            message = 'get paper failed, please check the paper id is legal!';
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
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
