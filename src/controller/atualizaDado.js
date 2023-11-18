const pool = require('../database/conexao')

const atualizaDado = async (req, res) => {
  const { id, nome } = req.body
  if (!id || !nome)
    res.status(400).json({ messagem: 'Os Campos são obrigatórios' })

  try {
    const query = 'update usuario set nome = $2 where id = $1'
    const resultado = await pool.query(query, [id, nome])

    if (resultado.rowCount === 0) {
      return res.status(404).json({ messagem: 'ID não existente na Base' })
    }
    res.status(200).json({ mensagem: 'Registro atualizado!' })
  } catch (error) {
    res.status(501).json({ messagem: 'Erro interno do servidor' })
  }
}

module.exports = { atualizaDado }
