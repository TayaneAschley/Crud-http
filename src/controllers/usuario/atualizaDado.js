const Usuario = require('../../repositories/usuario/index')
const usuarioInstacia = new Usuario()
const {
  validaEmail,
  validaId,
  validaCampos,
} = require('../../middlewares/index')

const atualizaDado = async (req, res) => {
  const { id, nome, email, senha } = req.body

  try {
    await validaId(id)
    validaCampos(nome, email, senha)
    await validaEmail(email)
    
    await usuarioInstacia.atualizar({ id, nome, email, senha })

    return res.status(200).json({ messagem: 'Dados atualizados' })
  } catch (error) {
    return res.status(501).json({ mensagem: error.message })
  }
}

module.exports = { atualizaDado }
