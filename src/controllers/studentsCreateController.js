const { repositoryFactory } = require('../repositories/factory')

async function create (req, res) {
    const input = req.body
    const { rm, nome, curso, serie } = input
    const repository = repositoryFactory()
    console.log('input: ', input)
    if (!rm || !nome || !curso || !serie) {
      return res.status(400).json({
        code: 'STU-001',
        message: 'Rm, nome, curso e série são obrigatórios, revise e tente novamente'
      })
    }
    const studentFound = await repository.findByRm(rm)
    if (studentFound) {
      return res.status(400).json({
        code: 'STU-002',
        message: 'Já existe um aluno com este rm!'
      })
    }
    await repository.create(input)
    return res.status(201).json()
}

module.exports = { create }