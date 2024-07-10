const express = require('express')
const router = express.Router()
const Centredinteret = require('../models/CompetencesCentredinteret')

router.get('/centredinteret', async (req, res) => {
    const centredinterets = await Centredinteret.find()
    console.log(centredinterets);
    res.json(centredinterets)
})
router.post('/centredinteret', async (req, res) => {
    const newCentredinteret = req.body
    await Centredinteret.create(newCentredinteret)
    // res.json(newLangue)
    res.json(newCentredinteret)
})

router.delete('/centredinteret/:id', async (req, res) => {
    try {
        const { id } = req.params
        const centredinteretsDel = await Centredinteret.findById(id)
        await Centredinteret.findByIdAndDelete(id)
        res.status(200).json(centredinteretsDel)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }

})

module.exports = router;            