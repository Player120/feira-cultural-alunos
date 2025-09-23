const { Router } = require('express')
const studentsListController = require('./controllers/studentsListController')
const studentsListByRmController = require('./controllers/studentsListByRmController')
const studentsCreateController = require('./controllers/studentsCreateController')
const router = Router()

router.get('/students', studentsListController.listAll)  
router.get('/students/:rm', studentsListByRmController.findByRm)
router.post('/students', studentsCreateController.create)

module.exports = { router }