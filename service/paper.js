'use strict';

const PAGE_LENGTH = 10;

const models = require('../model');

const Paper = models.db.Paper;

module.exports = {
    async create(data) {
        const paper = await Paper.create(data);

        return paper.toJSON();
    },
    async update(data) {
        const id = data.id;
        const paper = await Paper.findById(id);

        if (paper) {
            const result = await paper.update(data);

            return result;
        }
        return null;
    },
    async findById(id) {
        const paper = await Paper.findById(id);

        return paper.toJSON();
    },
    async findMany(query){
        query = query || {};

        const papers = await Paper.findAll(query);

        return papers.map(paper => paper.toJSON());
    },
    async page(where, page) {
        where = where || {};
        page = page || 1;

        const query = {
            where,
            limit: PAGE_LENGTH,
            offset: ((page - 1) * PAGE_LENGTH),
        };
        const result = await Paper.findAndCountAll(query);

        return ({
            page,
            count: result.count,
            rows: result.rows.map(paper => paper.toJSON()),
        });
    },
};
