'use strict';

function stanAlert() {
    /**
     *  通用的 alert 方法，警告内容支持 html 格式标签
     *  @param {object} [options] （可选）相关参数、设定
     *      {string}  [type]         （可选）指定 alert 类型：可选 info、danger、warning、success，默认为 danger
     *      {string}  [title]        （可选）指定 alert 内容的小标题
     *      {string}  [content]      （可选）指定 alert 内容的正文
     *      {boolean} [autoClose]    （可选）指定 alert 是否自动隐藏，默认 true ，传入的参数会被类型转换
     *      {number}  [shownExpires] （可选）指定 alert 多少秒后自动隐藏，默认 3 秒，若传入的 autoClose 为 false ，此参数将不生效
     *      {string}  [textAlign]    （可选）指定 alert 中主体内容的文案对齐方式，默认 left ，可传入值为 left/center/right
     */
    var typeMap = {
        'info': 'info',
        'danger': 'danger',
        'warning': 'warning',
        'success': 'success',
    };
    var alignMap = {
        'left': 'left',
        'center': 'center',
        'right': 'right',
    };
    var options = arguments[0] || {};
    var alertType = options.type ? (typeMap[options.type] || 'danger') : 'danger';
    var alertTitle = options.title ? `<strong>${options.title}</strong><br/>` : '';
    var alertContent = options.content || '';
    var autoClose  = Boolean((options.autoClose === undefined) ? true : options.autoClose);
    var shownExpires = Number((options.shownExpires === undefined) ? 3 : options.shownExpires);
    var textAlign = options.textAlign ? (alignMap[options.textAlign] || 'left') : 'left';
    var alertDom = '' +
        `<div class="stan-alert-container">
            <div class="alert alert-${alertType}" role="alert">
                <button type="button" class="close"><span aria-hidden="true">&times;</span></button>
                <div class="alert-content">
                    ${alertTitle}
                    <div class="text-${textAlign}">${alertContent}</div>
                </div>
            </div>
        </div>`;
    var autoCloseFunc;

    if (autoClose) {
        autoCloseFunc = setTimeout(function() {
            $('.stan-alert-container').fadeOut('slow', function() {
                $(this).remove();
            });
        }, shownExpires * 1000);
    }

    $('body').append(alertDom);
    $('.stan-alert-container button.close').on('click', function() {
        $('.stan-alert-container').fadeOut('fast', function() {
            $(this).remove();
            clearTimeout(autoCloseFunc);
        });
    });
}

module.exports = stanAlert;