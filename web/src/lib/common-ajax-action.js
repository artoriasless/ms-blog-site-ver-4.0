'use strict';
/* global $ */
function ajaxAction(url, data, successFunc, failFunc, opts) {
    //  通用的 ajax 调用方法，在 $.ajax 基础上做一次包装
    const defaultOpts = {
        url,
        data,
        type   :'post',
        success: function(data) {
            if (successFunc) successFunc(data);
        },
        error  : function(err) {
            if (failFunc) failFunc(err);
        }
    };

    if (opts) {
        for (let key in opts) {
            defaultOpts[key] = opts[key];
        }
    }

    $.ajax(defaultOpts);
}

module.exports = ajaxAction;
