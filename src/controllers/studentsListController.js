const { repositoryFactory } = require('../repositories/factory')

async function listAll (req, res) {
    const repository = repositoryFactory()
    const students = await repository.findAll()
    return res.json(students)
}

module.exports = { listAll }