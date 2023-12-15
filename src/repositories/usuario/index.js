const conexao = require('../../database/conexao')
const bcrypt = require('bcrypt')

class Usuario {
  async cadastrar({ nome, email, senha, token }) {
    const senhaCriptografada = await bcrypt.hash(senha, 10)

    const resultado = await conexao
      .knex('usuario')
      .insert({
        nome,
        email,
        senha: senhaCriptografada,
        token,
      })
      .returning(['nome', 'email', 'token'])

    return resultado
  }

  async exibir() {
    const resultado = await conexao.knex
      .select('id', 'nome', 'email', 'token')
      .from('usuario')

    return resultado
  }

  async remover(id) {
    const resultado = await conexao.knex('usuario').where({ id }).del()

    return resultado
  }

  async atualizar({ id, nome, email, senha }) {
    const resultado = await conexao
      .knex('usuario')
      .where({ id })
      .update({ nome, email, senha })

    return resultado
  }
}

module.exports = Usuario
