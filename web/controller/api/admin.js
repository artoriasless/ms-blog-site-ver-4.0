'use strict';

const service = require('../../../service');

module.exports = {
    async addPaper(ctx) {
        var success = true;
        var message = 'add paper success!';
        var data = {};

        ctx.body = {
            success,
            message,
            data,
        };
    },
    async updatePaper(ctx) {
        var success = true;
        var message = 'update paper success!';
        var data = {};

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
