'use strict';
/* global $ */
/**
 * 通用的 alert 方法，警告内容支持 html 格式标签
 * @param {object} [options] （可选）相关参数、设定
 *      {string}  [type]         （可选）指定 alert 类型：可选 info、danger、warning、success，默认为 danger
 *      {string}  [title]        （可选）指定 alert 内容的小标题
 *      {string}  [content]      （可选）指定 alert 内容的正文
 *      {boolean} [autoClose]    （可选）指定 alert 是否自动隐藏，默认 true ，传入的参数会被类型转换
 *      {number}  [shownExpires] （可选）指定 alert 多少秒后自动隐藏，默认 3 秒，若传入的 autoClose 为 false ，此参数将不生效
 */
function stanAlert() {
    var typeMap = {
        'info': 'info',
        'danger': 'danger',
        'warning': 'warning',
        'success': 'success',
    };
    var options = arguments[0] || {};
    var alertType = options.type ? (typeMap[options.type] || 'danger') : 'danger';
    var alertTitle = options.title || '';
    var alertContent = options.content || '';
    var autoClose  = Boolean((options.autoClose === undefined) ? true : options.autoClose);
    var shownExpires = Number((options.shownExpires === undefined) ? 3 : options.shownExpires);
    var alertDom = '' +
        '<div class="stan-alert-container">' +
            '<div class="alert alert-' + alertType + '" role="alert">' +
                '<button type="button" class="close"><span aria-hidden="true">&times;</span></button>' +
                '<strong>' + alertTitle + '</strong>' +
                '<br/>' +
                alertContent +
            '</div>' +
        '</div>';

    $('body').append(alertDom);
    $('.stan-alert-container button.close').on('click', function() {
        $('.stan-alert-container').fadeOut('fast', function() {
            $(this).remove();
        });
    });

    if (autoClose) {
        setTimeout(function() {
            $('.stan-alert-container').fadeOut('slow', function() {
                $(this).remove();
            });
        }, shownExpires * 1000);
    }
}

module.exports = stanAlert;
