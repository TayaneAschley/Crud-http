const conexao = require('../database/conexao')

function validaCampos(nome, email, senha) {
  if (!nome || !email || !senha) {
    throw new Error('Os Campos são obrigatórios')
  }
}

async function validaId(id) {
  if (!id) throw new Error('O id é obrigatório')

  const buscaId = await conexao.knex('usuario').select('id').where({ id })
  if (buscaId.length === 0) {
    throw new Error('Id não encontrado na base')
  }
}

async function validaEmail(email) {
  const emailCadastrado = await conexao.knex('usuario').where('email', email)
  if (emailCadastrado.length > 0) {
    throw new Error('Email já cadastrado')
  }
}

module.exports = { validaId, validaEmail, validaCampos }
