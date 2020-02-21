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

function ErrorMapper(val) {
    switch(val) {
        case -1:
            return 'Invalid Player Given';
        case -2:
            return 'Invalid Team Given';
        case -3:
            return 'Invalid Coach Given';
        case -4:
            return 'Player Already On Roster';
        case -5:
            return 'Invalid Roster Given';
        case -6:
            return 'Username Already Exists';
        case -7:
            return 'Incorect Role Given';
        case -8:
            return "Activity Doesn't Exist";
        case -9:
            return "Game Doesn't Exist";
        case -10:
            return 'Player Cannot Succeed More Than They Attempt';
        case -11:
            return 'Coach Already Coaches Team';
        case -12:
            return "Practice Doesn't Exist";
        case -13:
            return 'Invalid Combo of Username and Password';
        case -14:
            return 'Invalid Combo of Username and Password';
        case -15:
            return 'Please Enter Only Lowercase, Uppercase, and Numbers';
    }
}

exports.queryBuilder = queryBuilder;
exports.ErrorMapper = ErrorMapper;