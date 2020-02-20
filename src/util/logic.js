var dateFormat = require('dateformat');


// make record string with
// wins-losses-ties
const make_record = (win, loss, ties) => {
    return `${win}-${loss}-${ties}`.toString();
}

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

function concatName(fname, lname) {
    return `${fname} ${lname}`;
}

function formatDateTime(datetime) {
    return dateFormat(datetime, "dddd, mmmm dS, yyyy, h:MM:ss TT");
}

function createPairList(teams, activities) {
    console.log('YUH')
    if (teams != null && activities != null) {
        let pairLinks = {};
        const pairs = []
    
        teams.forEach(function(teams,id) {
            pairLinks.push({teamid: id})
            activities.forEach(function(activities, id){
                pairLinks[id].push({activities: id})
            })
            pairs.push(pairLinks);
            pairLinks = {};
        })
        return pairs
    }
    return [];
    // teams.forEach(function(teams, id) {
    //     pairLinks.push({teamid: id})
    // })
    // activities.forEach(function(activities, id) {
    //     pairLinks.push({activityid: id})
    // })
    // return pairLinks
    // //Make one object with each team id and game id
}

exports.make_record = make_record;
exports.findObjectByKey = findObjectByKey;
exports.concatName = concatName;
exports.formatDateTime = formatDateTime;
exports.createPairList = createPairList;