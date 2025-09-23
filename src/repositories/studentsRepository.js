const { startConnection, closeConnection } = require('../infra/database/mongodb')
const StudentModel = require('../infra/models/students')

class StudentsRepository {
    async create (data) {
        await startConnection()
        await StudentModel.create(data)
        await closeConnection()
    }
    async findAll () {
        await startConnection()
        const students = await StudentModel.find()
        await closeConnection()
        console.log('findAll::students:', students)
        return students
    }
    async findByRm (rm) {
        await startConnection()
        const student = await StudentModel.findOne({ rm })
        await closeConnection()
        console.log('findByRm::student:', student)
        return student
    }
}

module.exports = { StudentsRepository }