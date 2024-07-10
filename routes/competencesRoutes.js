const express = require('express')
const router = express.Router()
const competenceModel = require('../models/CompetencesModels')

router.get("/competence", async (req, res) => {
    const competences = await competenceModel.find()
    res.json(competences)
})
router.post('/competence', async (req, res) => {
    const newCompetence = req.body
    const nouvCompetence = await competenceModel.create(newCompetence)
    res.json(nouvCompetence)
})

router.delete("/competence/:id", async (req, res) => {
    try {
        const { id } = req.params
        const suppCompetence = await competenceModel.findById(id)
        await competenceModel.findByIdAndDelete(id)
        res.status(200).json(suppCompetence)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }

})

module.exports = router