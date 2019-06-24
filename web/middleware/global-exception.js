'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const config = require('../../config');
const staticVersion = (config.env === 'production') ? `.${require('../src/package.json').version}.` : '.';
const staticServer = (config.env === 'production') ? config.ossPublic.static : '';

module.exports = async (ctx, next) => {
    const statusCode = String(ctx.status);

    try {
        await next();

        if (statusCode[0] !== '2' && statusCode !== '3') {
            const error = {
                code: ctx.status,
                message: ctx.message,
            };

            throw(error);
        }
    } catch (err) {
        const apiUrlReg = /^\/{0,1}api\//;
        const requestUrl = ctx.request.url;
        const filePath = path.resolve(__dirname, `../template/status/${statusCode == 404 ? '404' : 'unknown'}.html`);
        var data;

        if (apiUrlReg.test(requestUrl)) {
            //  ajax 请求
            data = {
                success: false,
                message: err.message.toString(),
                data: null,
            };
        } else {
            //  页面访问
            data = fs.readFileSync(filePath).toString().replace(/<errorContent>/g, err.message.toString().trim());
            data = data.replace(/<staticVersion>/g, staticVersion);
            data = data.replace(/<staticServer>/g, staticServer);
        }

        ctx.body = data;
    }
};
