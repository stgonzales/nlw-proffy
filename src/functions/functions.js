const subjects = require('../data/subjects');

module.exports.getSubject = function (subjNum){
    const position = +subjNum - 1
    return subjects[position]
}