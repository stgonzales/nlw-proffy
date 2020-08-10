const proffys = require('./data/proffys');
const subjects = require('./data/subjects');
const weekdays = require('./data/weekdays');
const functions = require('./functions/functions');

module.exports = {
    async index(req,res){
        return res.render("index.html")
    },

    async study(req, res){
        const filters = req.query
        return res.render("study.html", { proffys, filters, subjects, weekdays})
    },

    async class(req,res){
        const data = req.query
        const isEmpty = Object.keys(data).length > 0

        if(isEmpty) {
            data.subject = functions.getSubject(data.subject)
            proffys.push(data)
            return res.redirect("/study")
        }

        return res.render("give-classes.html", { subjects, weekdays })
    }
}