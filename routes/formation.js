const express = require('express')
const router = express.Router()
const formationModel = require('../models/FormationsModel')

router.get('/formation', async (req, res) => {
    const formation = await formationModel.find()
    res.json(formation)
})

router.post('/formation', async (req, res) => {
    const newFomartion = req.body
    await formationModel.create(newFomartion)
    res.json(newFomartion)
})

router.delete("/formation/:id", async (req, res) => {
    try {
        const { id } = req.params
        const formation = await formationModel.findById(id)
        await formationModel.findByIdAndDelete(id)
        res.status(200).json({ message: `la competence ${formation.diplome}a été supprimée` })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router