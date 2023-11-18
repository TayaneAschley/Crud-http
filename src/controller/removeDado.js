const pool = require('../database/conexao')

const removeDado = async (req, res) => {
  const { id } = req.body

  if (!id) {
    res.status(400).json({ messagem: 'Este campo é obrigatório' })
  }

  try {
    const query = 'DELETE FROM usuario WHERE id=$1 RETURNING *'
    const resultado = await pool.query(query, [id])

    if (resultado.rowCount === 0) {
      return res.status(404).json({ messagem: 'ID não existente na Base' })
    }

    res.status(204).end()
  } catch (error) {
    res.status(501).json({ messagem: 'Erro interno do servidor' })
  }
}

module.exports = { removeDado }
