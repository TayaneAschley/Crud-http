const Usuario = require('../../repositories/usuario/index')
const usuarioInstacia = new Usuario()
const jwt = require('jsonwebtoken')

const exibiDados = async (req, res) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ messagem: 'Não autorizado' })
  }
  const token = authorization.split(' ')[1]
  try {
    const tokenUsuario = jwt.verify(token, 'senhaSecreta')
    const resultado = await usuarioInstacia.exibir()
    res.status(200).json(resultado)
  } catch (error) {
    res.status(501).json({ mensagem: error.message })
  }
}

module.exports = { exibiDados }
