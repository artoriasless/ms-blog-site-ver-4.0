'use strict';
/* global $ */
const $root = $('#root');

function hideMainScrollerbar() {
    const offsetWidth = $root.prop('offsetWidth');
    const clientWidth = $root.prop('clientWidth');
    const offsetVal = Math.abs(offsetWidth - clientWidth + 2);

    $root.css('margin-right', `-${offsetVal}px`);
}

module.exports = hideMainScrollerbar;
