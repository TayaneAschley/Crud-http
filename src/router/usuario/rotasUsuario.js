const { Router } = require('express')
const rotasUsuario = Router()

const { exibiDados } = require('../../controllers/usuario/exibiDados')
const { cadastrarDado } = require('../../controllers/usuario/cadastraDados')
const { removeDado } = require('../../controllers/usuario/removeDado')
const { atualizaDado } = require('../../controllers/usuario/atualizaDado')

rotasUsuario.get('/inicio/usuarios', exibiDados)
rotasUsuario.post('/inicio/cadastraUsuario', cadastrarDado)
rotasUsuario.put('/inicio/atualizaDado', atualizaDado)
rotasUsuario.delete('/inicio/removeDado/:id', removeDado)

module.exports = rotasUsuario
