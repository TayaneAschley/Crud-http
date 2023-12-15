const Usuario = require('../../repositories/usuario/index')
const usuarioInstacia = new Usuario()
const conexao = require('../../database/conexao')
const jwt = require('jsonwebtoken')
const { validaEmail, validaCampos } = require('../../middlewares/index')

const cadastrarDado = async (req, res) => {
  const { nome, email, senha } = req.body

  try {
    validaCampos(nome, email, senha)
    await validaEmail(email)
    const token = jwt.sign({ email: email }, 'senhaSecreta')
    const retornoCadastro = await usuarioInstacia.cadastrar({
      nome,
      email,
      senha,
      token,
    })

    res.status(201).json(retornoCadastro)
  } catch (error) {
    res.status(501).json({ mensagem: error.message })
  }
}

module.exports = { cadastrarDado }
