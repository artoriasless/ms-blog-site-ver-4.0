'use strict';

const service = require('../../../service');
const userService = service.user;

module.exports = {
    async getUserDefault(ctx) {
        const loginUser = ctx.session.user || {};
        const user = await userService.findById(Number(loginUser.id)) || {};

        ctx.session.user = user;
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
            message: 'logout success!',
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
