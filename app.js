require('dotenv').config()
const contactRouter = require('./routes/contactRoute.js')
console.log(process.env.DB);
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

const contactRoute = require('./routes/contactRoute.js')
const competenceRoute = require('./routes/competencesRoutes.js')
const langueRoute = require('./routes/langue.js')
const interetsRoute = require('./routes/centredinteretRoute.js')
const experienceRoute = require('./routes/experiencesRoute.js')
const formationRoute = require('./routes/formation.js')

mongoose.connect(process.env.DB)
    .then(() => {
        console.log('Connexion à la base de données avec succées');
    })
    .catch((error) => {
        console.log(error)
    })

app.use(cors())


app.listen(PORT, () => {
    console.log(`le serveur tourne sur le port ${PORT}`);
})




app.use(express.json())
app.use('', contactRoute)
app.use('', competenceRoute)
app.use('', langueRoute)
app.use('', interetsRoute)
app.use('', experienceRoute)
app.use('', formationRoute)