const { StudentsRepository } = require('./studentsRepository')
const { StudentsRepositoryInMemory } = require('./studentsRepositoryInMemory')

function repositoryFactory () {
    const driver = process.env.DATABASE_DRIVER
    return driver === 'inMemory'
        ? new StudentsRepositoryInMemory()
        : new StudentsRepository()
}

module.exports = { repositoryFactory }