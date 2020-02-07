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

exports.make_record = make_record;
exports.findObjectByKey = findObjectByKey;