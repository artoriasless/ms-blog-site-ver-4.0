function getQueryParam(parameterName) {
    var reg = new RegExp('(^|&)'+ parameterName + '=([^&]*)(&|$)'),
        url = window.location.search.substr(1).match(reg);

    if (url != null) {
        return decodeURI(url[2]);
    }

    return null;
}

module.exports = getQueryParam;
