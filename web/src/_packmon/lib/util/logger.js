'use strict';
/**
 *  统一的 console.info 方法，做了一次包装，便于调用
 */
function logger() {
    const args = Array.prototype.slice.call(arguments);

    console.info.apply(console, args);  //  eslint-disable-line
}

module.exports = logger;
