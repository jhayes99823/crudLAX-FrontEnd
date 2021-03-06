import React from 'react';
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
    if (teams != null && activities != null) {
        let pairLinks = new Object();
        pairLinks.teamid = -1;
        pairLinks.gameid = -1;
        const pairs = [];
    
        teams.forEach(function(teams,tid) {
            pairLinks.teamid = teams.ID
            activities.forEach(function(activities, aid){
                pairLinks.gameid = activities.id
            })
            pairs.push(pairLinks);
            pairLinks = new Object();
            pairLinks.teamid = -1;
            pairLinks.gameid = -1;

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

function creatOpponentArray({ games }) {
    return games.map(games => (
        <h1>{games.opponent}</h1>
    ));
}

function calculateWin(yourScore, oppScore) {
    if (yourScore == oppScore) {
        return 2;
    }
    return (yourScore > oppScore) ? 1 : 0;
}


function fixDateAndTime(date, time) {
    return date + ' ' + time;
}

exports.make_record = make_record;
exports.findObjectByKey = findObjectByKey;
exports.concatName = concatName;
exports.formatDateTime = formatDateTime;
exports.createPairList = createPairList;
exports.calculateWin = calculateWin;
exports.fixDateAndTime = fixDateAndTime;
