const pool = require('../database/conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../controller/senhaJwt')

const cadastraDado = async (req, res) => {
  const { nome, email, senha } = req.body

  if (!nome || !email || !senha) {
    res.status(400).json({ messagem: 'Os Campos são obrigatórios' })
  }

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10)
    const query =
      'insert into usuario (nome, email, senha) values ($1, $2, $3) returning *'
    const resultado = await pool.query(query, [nome, email, senhaCriptografada])

    const token = jwt.sign({ id: resultado.rows[0].id }, senhaJwt, {
      expiresIn: '8h',
    })

    const { senha: _, ...dadocadastrado } = resultado.rows[0]

    res.status(201).json({ usuario: dadocadastrado, token })
  } catch (error) {
    res.status(501).json(error)
  }
}

module.exports = { cadastraDado }
