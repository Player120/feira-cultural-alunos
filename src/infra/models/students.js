const { Schema, model } = require('mongoose')

const studentSchema = new Schema({
    rm: Number,
    nome: String,
    curso: String,
    serie: Number,
    email: String
}, { timestamps: true })

module.exports = model('alunos', studentSchema)