const mongoose = require('mongoose')
const CompetenceCentredinteret = mongoose.Schema({
    activite: String
})

const Centredinteret = mongoose.model('Centredinterets', CompetenceCentredinteret)
module.exports = Centredinteret