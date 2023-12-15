require('dotenv').config()
const express = require('express')
const app = express()


const rotasUsuario = require('./router/usuario/rotasUsuario')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(rotasUsuario)

app.listen(port, () => {
  console.log('Servidor aberto na porta 3000')
})
