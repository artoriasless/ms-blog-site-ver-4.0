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
        const apiUrlReg = /^\/{0,1}api\//;
        const requestUrl = ctx.request.url;
        const errorType = err.code || 'unknown';
        const filePath = path.resolve(__dirname, `../template/status/${errorType}.html`);
        var data;

        if (apiUrlReg.test(requestUrl)) {
            //  ajax 请求
            data = {
                success: false,
                message: err.toString(),
                data: null,
            }
        } else {
            //  页面访问
            if (errorArr.indexOf(errorType) === -1) {
                data = fs.readFileSync(filePath).toString().replace(/<errorContent>/g, err.toString());
            } else {
                data = fs.readFileSync(filePath).toString();
            }
        }

        ctx.body = data;
    }
};
