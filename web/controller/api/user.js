'use strict';

module.exports = {
    async getUserDefault(ctx) {
        const user = ctx.session.user || {};

        ctx.body = { user, };
    },
};
