const express = require('express')
const router = express.Router()
const controller = require('../controllers/matchesController')

router.get('/:id', controller.getOne)

module.exports = router