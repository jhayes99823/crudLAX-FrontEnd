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
            return 'Invalid PlayerID';
        case -2:
            return 'Invalid TeamID';
        case -3:
            return 'Invalid CoachID';
        case -4:
            return 'Player Already On Roster';
        case -5:
            return 'Invalid RosterID';
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
            return 'Incorrect Password';
        case -14:
            return 'User Not Found';
    }
}

exports.queryBuilder = queryBuilder;
exports.ErrorMapper = ErrorMapper;