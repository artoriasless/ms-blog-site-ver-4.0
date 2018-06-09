'use strict';
/* global $ */
function stanLoading(hide) {
    var loadingDom = '' +
        '<div class="stan-loading-container">' +
            '<div class="stan-loading-content">' +
                '<img class="loading" src="/img/loading.gif"/>' +
            '</div>' +
        '</div>';

    if (hide) {
        $('.stan-loading-container').fadeOut('fast', function() {
            $(this).remove();
        });
    } else {
        if ($('.stan-loading-container').length === 0) {
            $('body').append(loadingDom);
        }
    }
}

module.exports = stanLoading;
