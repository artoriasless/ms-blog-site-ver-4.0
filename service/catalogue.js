'use strict';

const PAGE_LENGTH = 10;

const models = require('../model');

const Message = models.db.Message;

module.exports = {
    async findMany(query){
        query = query || {};

        const replies = await Message.findAll(query);

        return replies.map(message => (message ? message.toJSON() : {}));
    },
    async page(where, page) {
        where = where || {};
        page = page || 1;

        const query = {
            where,
            limit: PAGE_LENGTH,
            offset: ((page - 1) * PAGE_LENGTH),
        };
        const result = await Message.findAndCountAll(query);

        return ({
            page,
            count: result.count,
            rows: result.rows.map(message => (message ? message.toJSON() : {})),
        });
    },
};
