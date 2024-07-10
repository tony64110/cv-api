const mongoose = require('mongoose')
const formationSchema = mongoose.Schema({
    annee: String,
    etablissement: String,
    diplome: String
})

const formationModel = mongoose.model('Formation', formationSchema)
module.exports = formationModel