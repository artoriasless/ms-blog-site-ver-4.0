'use strict';

// const colorBlack = '\x1b[30m';
// const colorRed = '\x1b[31m';
// const colorGreen = '\x1b[32m';
// const colorYellow = '\x1b[33m';
// const colorBlue = '\x1b[34m';
// const colorMagenta = '\x1b[35m';
// const colorCyan = '\x1b[36m';
// const colorWhite = '\x1b[37m';

module.exports = (str, args) => {   //  eslint-disable-line
    const dataArr = str.split(/\s+/).slice(1);
    const colorArr = [
        /* req/res , method , url , status , time , size */
        '\x1b[33m', '\x1b[32m', '\x1b[34m', '\x1b[36m', '\x1b[36m', '\x1b[36m'
    ];

    const outputArr = [' '];

    for (let i = 0; i < dataArr.length; i++) {
        outputArr.push(colorArr[i]);
        outputArr.push(dataArr[i]);
    }

    console.info(...outputArr);    //  eslint-disable-line
};
