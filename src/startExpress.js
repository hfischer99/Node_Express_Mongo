const porta = 3003

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


module.exports = function startExpress() {

    const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
consign().include('./src/routes').into(app)

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.` )
})
}

