const { repositoryFactory } = require('../repositories/factory')

async function findByRm (req, res) {
    const { rm } = req.params
    const repository = repositoryFactory()
    const student = await repository.findByRm(rm)
    res.json(student)
}

module.exports = { findByRm }