'use strict';

const config = require('../../../config');

const service = require('../../../service');

const paperService = service.paper;

const getYearTag = () => (`${(new Date()).getFullYear()}`);
const getMonthTag = () => (`${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}`);

module.exports = {
    async addPaper(ctx) {
        const user = ctx.session.user;
        const jsonData = ctx.request.body;
        var success = true;
        var message = 'add paper success!';
        var data = {};

        if (config.owners.indexOf(user.uuid) === -1) {
            success = false;
            message = 'sorry you son of a bitch have no permission to add paper!';
        } else {
            jsonData.title = jsonData.title.trim();
            jsonData.tag = jsonData.tag.trim();
            jsonData.subtag = jsonData.subtag.trim();
            jsonData.brief = jsonData.brief.trim();
            jsonData.content = jsonData.content.trim();
            jsonData.yearTag = getYearTag();
            jsonData.monthTag = getMonthTag();

            data = await paperService.create(jsonData);
            success = Boolean(data.id);
            message = success ? message : 'add paper failed!';
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
    async updatePaper(ctx) {
        const user = ctx.session.user || {};
        const jsonData = ctx.request.body;
        var success = true;
        var message = 'update paper success!';
        var data = {};

        if (config.owners.indexOf(user.uuid) === -1) {
            success = false;
            message = 'sorry you son of a bitch have no permission to update paper!';
        } else {
            if (isNaN(jsonData.id)) {
                success = false;
                message = 'please pass legal paper id!';
            } else {
                jsonData.title = jsonData.title.trim();
                jsonData.tag = jsonData.tag.trim();
                jsonData.subtag = jsonData.subtag.trim();
                jsonData.brief = jsonData.brief.trim();
                jsonData.content = jsonData.content.trim();

                data = await paperService.update(jsonData);
                success = Boolean(data.id);
                message = success ? message : 'update paper failed!';
            }
        }

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
