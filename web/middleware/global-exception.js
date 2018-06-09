'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const errorArr = [
    404,
];

module.exports = async (ctx, next) => {
    try {
        await next();

        if (errorArr.indexOf(ctx.status) !== -1) {
            const error = {
                code: ctx.status,
                message: ctx.message,
            };

            throw(error);
        }
    } catch (err) {
        const errorType = err.code || 'unknown';
        const filePath = path.resolve(__dirname, `../template/status/${errorType}.html`);
        var data;

        if (errorArr.indexOf(errorType) === -1) {
            data = fs.readFileSync(filePath).toString().replace(/<errorContent>/g, err.toString());
        } else {
            data = fs.readFileSync(filePath).toString();
        }

        ctx.body = data;
    }
};
