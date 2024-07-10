const express = require('express')
const router = express.Router()
const contactSchema = require('../models/ContactModels')

router.get('/contact', async (req, res) => {
    const contact = await contactSchema.find()
    console.log(contact);
    res.json(contact)
})
router.post('/contact', async (req, res) => {
    const newContact = req.body
    await contactSchema.deleteOne()
    await contactSchema.create(newContact)
    res.json(newContact)
})

router.delete('/contact/:id', async (req, res) => {
    try {
        const { id } = req.params
        const contact = await contactSchema.findById(id)
        await contactSchema.findByIdAndDelete(id)
        res.status(200).json(contact.nom)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }

})
module.exports = router