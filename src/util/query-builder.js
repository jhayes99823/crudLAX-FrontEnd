function queryBuilder(url, params, method) {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    var request = new Request(url + "?" + query, {
        method: method
    });

    return request;
}

exports.queryBuilder = queryBuilder;