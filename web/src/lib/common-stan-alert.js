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
    var styleDom = '' +
        `
        <style class="stan-alert">
            .stan-alert-container {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 9999999;
                background-color: rgba(255,255,255,0.5);
            }
            .stan-alert-container .alert {
                position: absolute;
                width: 750px;
                height: 100px;
                top: 50%;
                left: 50%;
                padding: 25px 25px 15px;
                margin-left: -375px;
                margin-top: -100px;
            }
            .stan-alert-container .alert .close {
                position: absolute;
                display:  block;
                width: 25px;
                height: 25px;
                line-height: 25px;
                text-align: center;
                right: 0;
                top: 0;
            }
            @media (min-width: 768px) and (max-width: 979px) {
                .stan-alert-container .alert {
                    width: 600px;
                    height: 150px;
                    margin-left: -300px;
                    margin-top: -75px;
                }
            }

            @media (max-width: 767px) {
                .stan-alert-container .alert {
                    width: 500px;
                    height: 200px;
                    margin-left: -250px;
                    margin-top: -100px;
                }
            }

            @media (max-width: 480px) {
                .stan-alert-container .alert {
                    width: 250px;
                    height: 250px;
                    margin-left: -125px;
                    margin-top: -125px;
                }
            }
        </style>
        `;
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
    if ($('style.stan-alert').length === 0) {
        $('body').append(styleDom);
    }

    if (autoClose) {
        setTimeout(function() {
            $('.stan-alert-container').fadeOut('slow', function() {
                $(this).remove();
            });
        }, shownExpires * 1000);
    }
}

module.exports = stanAlert;
