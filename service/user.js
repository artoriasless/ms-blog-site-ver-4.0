'use strict';

const PAGE_LENGTH = 10;

const models = require('../model');

const User = models.db.User;

module.exports = {
    async create(data) {
        const user = await User.create(data);

        return (user ? user.toJSON() : {});
    },
    async update(data) {
        const id = data.id;
        const user = await User.findById(id);

        if (user) {
            const result = await user.update(data);

            return (result ? result.toJSON() : {});
        }
        return null;
    },
    async findById(id) {
        const user = await User.findById(id);

        return (user ? user.toJSON() : {});
    },
    async findMany(query){
        query = query || {};

        const users = await User.findAll(query);

        return users.map(user => (user ? user.toJSON() : {}));
    },
    async page(where, page) {
        where = where || {};
        page = page || 1;

        const query = {
            where,
            limit: PAGE_LENGTH,
            offset: ((page - 1) * PAGE_LENGTH),
        };
        const result = await User.findAndCountAll(query);

        return ({
            page,
            count: result.count,
            rows: result.rows.map(user => (user ? user.toJSON() : {})),
        });
    },
};
