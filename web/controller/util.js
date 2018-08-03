'use strict';

const fs = require('fs');
const formidable = require('koa-formidable');
// const uuid = require('uuid/v4');

const service = require('../../service');
const utilService = service.util;

async function resolveFileOpts(req, ctx) {
    function resolveForm() {
        return new Promise((resolve, reject) => {   //  eslint-disable-line
            formData((opts, formObj) => {
                resolve({
                    fields: formObj.fields,
                    files: formObj.files,
                });
            });
        });
    }

    const formData = formidable.parse(req);
    const { fields, files } = await resolveForm(formData);
    const fileOpts = {
        fileData: fs.readFileSync(files.file.path),
        data: {},
    };
    var fileName;
    var ext = fields.ext || '.jpg';

    switch(fields.type) {
    case 'USER_AVATAR':
        fileName = `user/${ctx.session.user.uuid}${ext}`;
        fileOpts.message = 'avatar has been changed!';
        break;
    //  TODO
    // case 'PAPER_MATERIAL_IMAGE':
    //     fileName = `paper/image/${fileName}${ext}`;
    //     fileOpts.message = 'upload image success!';
    //     fileOpts.data = {
    //         fileName,
    //     };
    //     break;
    // case 'PAPER_MATERIAL_ATTACHMENT':
    //     ext = files.file.name.match(/\.[^.]+$/)[0];
    //     fileName = `paper/attachment/${fileName}${ext}`;
    //     fileOpts.data = {
    //         fileName,
    //     };
    //     break;
    default:
        fileOpts.fileName = '';
        fileOpts.fileData = '';
    }

    fileOpts.fileName = fileName;

    return fileOpts;
}

module.exports = {
    async uploadFile(ctx) {
        const fileOpts = await resolveFileOpts(ctx.request, ctx);
        const result = await utilService.async.upload(fileOpts);

        if (result.success) {
            result.message = fileOpts.message;
            result.data = fileOpts.data;
        }

        ctx.body = result;
    },
};
