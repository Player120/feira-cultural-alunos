const { Router } = require('express')
const studentsListController = require('./controllers/studentsListController')
const studentsCreateController = require('./controllers/studentsCreateController')
const router = Router()

router.get('/students', studentsListController.listAll)  
router.post('/students', studentsCreateController.create)

module.exports = { router }