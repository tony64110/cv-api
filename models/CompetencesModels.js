const mongoose = require('mongoose')
const competenceSchema = mongoose.Schema({
    skill: String
})

const competenceModel = mongoose.model('Competence', competenceSchema)
module.exports = competenceModel
