const { studentsTable } = require('../infra/models/inMemory')

class StudentsRepositoryInMemory {
    create (data) {
        studentsTable.push(data)
    }
    findAll () {
        return studentsTable
    }
    findByRm (rm) {
        const studentFound = studentsTable.find(
            student => student.rm === rm
        )
        return studentFound
    }
}

module.exports = { StudentsRepositoryInMemory }