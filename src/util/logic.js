// make record string with
// wins-losses-ties
const make_record = (win, loss, ties) => {
    return `${win}-${loss}-${ties}`.toString();
}

exports.make_record = make_record;