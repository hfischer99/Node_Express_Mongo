const porta = 3003

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
consign().include('./routes').into(app)

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.` )
})

