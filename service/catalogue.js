'use strict';

const PAGE_LENGTH = 10;

const models = require('../model');

const Paper = models.db.Paper;

const attributes = [
    'id', 'title', 'tag', 'subtag', 'brief',
    ['gmt_create', 'gmtCreate'],
    ['gmt_modified', 'gmtModified'],
];

module.exports = {
    async findMany(query){
        query = query || {};

        query.attributes = attributes;

        const catalogues = await Paper.findAll(query);

        return catalogues.map(catalogue => (catalogue ? catalogue.toJSON() : {}));
    },
    async page(where, page) {
        where = where || {};
        page = page || 1;

        const query = {
            where,
            attributes,
            limit: PAGE_LENGTH,
            offset: ((page - 1) * PAGE_LENGTH),
            order: [
                ['id', 'DESC'],
            ],
        };
        const result = await Paper.findAndCountAll(query);

        return ({
            page,
            count: result.count,
            rows: result.rows.map(catalogue => (catalogue ? catalogue.toJSON() : {})),
        });
    },
};
