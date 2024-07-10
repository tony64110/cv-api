const mongoose = require('mongoose')
const ExperiencesProfessionnelles = mongoose.Schema({
    annee: String,
    entreprise: String,
    poste: String
})

const ExperienceProfessionnelle = mongoose.model('ExperienceProfessionnelle', ExperiencesProfessionnelles)
module.exports = ExperienceProfessionnelle