'use strict';

const PAGE_LENGTH = 10;

const models = require('../model');

const Message = models.db.Message;

module.exports = {
    async create(data) {
        const message = await Message.create(data);

        return (message ? message.toJSON() : {});
    },
    async update(data) {
        const id = data.id;
        const message = await Message.findById(id);

        if (message) {
            const result = await message.update(data);

            return (result ? result.toJSON() : {});
        }
        return null;
    },
    async findById(id) {
        const message = await Message.findById(id);

        return (message ? message.toJSON() : {});
    },
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
