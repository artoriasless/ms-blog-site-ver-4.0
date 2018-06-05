'use strict';

module.exports = {
    async getUserDefault(ctx) {
        const user = ctx.session.user || {};

        ctx.body = {
            user,
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

        ctx.body = {
            success: true,
        };
    }
};
