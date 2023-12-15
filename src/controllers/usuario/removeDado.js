const Usuario = require('../../repositories/usuario/index')
const usuarioInstacia = new Usuario()
const conexao = require('../../database/conexao')
const { validaId } = require('../../middlewares/index')

const removeDado = async (req, res) => {
  const { id } = req.params

  try {
    await validaId(id)

    await usuarioInstacia.remover(id)
    res.status(204).json()
  } catch (error) {
    res.status(501).json({ mensagem: error.message })
  }
}

module.exports = { removeDado }
