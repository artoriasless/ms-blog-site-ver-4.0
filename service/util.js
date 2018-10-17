'use strict';

const co = require('co');
const OSS = require('ali-oss');
const nodemailer = require('nodemailer');

const ossConfig = require('../config/oss-config');
const emailConfig = require('../config/email-config');

module.exports = {
    async: {
        async upload(options) {
            const client = new OSS(ossConfig);
            const fileName = options.fileName;
            const fileData = options.fileData;
            const uploadFile = function(name, data) {
                return new Promise((resolve, reject) => {
                    co(function*() {
                        client.useBucket(ossConfig.bucket);

                        resolve(yield client.put(name, data));
                    }).catch(function(error) {
                        reject(error);
                    });
                });
            };
            var uploadResult, result;

            try {
                //  防止抛出异常导致进程中断，整个服务奔溃
                uploadResult = await uploadFile(fileName, fileData);
            } catch(err) {
                uploadResult = err;
            }
            if (uploadResult.res) {
                if (uploadResult.res.status == 200 || uploadResult.status == 200) {
                    result = {
                        success: true,
                        message: 'upload success!',
                        data: uploadResult.toString(),
                    };
                } else {
                    result = {
                        success: false,
                        message: 'upload faild!',
                        data: uploadResult.toString(),
                    };
                }
            } else {
                result = {
                    success: false,
                    message: 'upload faild!',
                    data: uploadResult.toString(),
                };
            }

            return result;
        },
    },
    email(options) {
        const transporter = nodemailer.createTransport(emailConfig);
        const mailOpts = {
            from: 'MonkingStand<1464051654@qq.com>',
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
        };

        transporter.sendMail(mailOpts); //  cancel error handler,think send success as default
    },
};
