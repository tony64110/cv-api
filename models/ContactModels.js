const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    email: String,
    tel: String,
    adresse: String
})

const contactModel = mongoose.model('Contact', contactSchema);
module.exports = contactModel;