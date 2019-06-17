'use strict';

/**
 * 通用的选中内容的方法
 * @param {object} [$element] （必传）$element 为原生 js 选择器返回的 dom 节点对象
 */
function selectContent($element) {
    if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        var range = document.createRange();
        range.selectNodeContents($element);
        sel.addRange(range);
    } else if (document.selection) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText($element);
        textRange.select();
    }
}

module.exports = selectContent;
