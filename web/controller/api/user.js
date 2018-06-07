'use strict';

const service = require('../../../service');
const userService = service.userService;

module.exports = {
    async getUserDefault(ctx) {
        const user = ctx.session.user || {};

        ctx.body = {
            success: true,
            message: '',
            data: user,
        };
    },
    async logout(ctx) {
        ctx.session.user = {};

        ctx.body = {
            success: true,
            message: '',
            data: {},
        };
    },
    async login(ctx) {
        const data = ctx.request.body;

        ctx.body = {
            success: true,
        };
    },
    async register(ctx) {
        const data = ctx.request.body;
        console.info(data);

        ctx.body = {
            success: true,
        };
    }
};
