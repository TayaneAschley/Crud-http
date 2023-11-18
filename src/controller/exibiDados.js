const pool = require('../database/conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../controller/senhaJwt')

const exibiDados = async (req, res) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ messagem: 'Não autorizado' })
  }

  const token = authorization.split(' ')[1]

  try {
    const tokenUsuario = jwt.verify(token, senhaJwt)
    const resultado = await pool.query('select * from usuario')
    res.status(200).json(resultado.rows)
  } catch (error) {
    res.status(501).json(error)
  }
}

module.exports = { exibiDados }
