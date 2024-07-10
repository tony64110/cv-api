const express = require('express')
const router = express.Router()
const experienceModel = require('../models/ExperiencesModel')

router.get('/experiences', async (req, res) => {
    const experience = await experienceModel.find()
    res.json(experience)
})
router.post('/experiences', async (req, res) => {
    const newexperience = req.body
    await experienceModel.create(newexperience)
    res.json(newexperience)
})

router.delete('/experiences/:id', async (req, res) => {
    try {
        const { id } = req.params
        const experience = await experienceModel.findById(id)
        await experienceModel.findByIdAndDelete(id)
        res.status(200).json(`la comptence ${experience.name} a été supprimée`)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }

})

module.exports = router;            