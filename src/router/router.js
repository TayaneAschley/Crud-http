const { Router } = require('express')
const rotas = Router()

const { exibiDados } = require('../controller/exibiDados')
const { cadastraDado } = require('../controller/cadastraDados')
const { removeDado } = require('../controller/removeDado')
const { atualizaDado } = require('../controller/atualizaDado')

rotas.get('/inicio', exibiDados)
rotas.post('/inicio/adicionaUsuario', cadastraDado)
rotas.put('/inicio/atualizaDado', atualizaDado)
rotas.delete('/inicio/removeDado', removeDado)

module.exports = rotas
