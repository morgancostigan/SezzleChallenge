
const express = require('express')

const CalcCtrl = require('../controllers/calc-controller')

const router = express.Router()

router.post('/calcs', CalcCtrl.createCalcs)
router.put('/calcs/:id', CalcCtrl.updateCalcs)
router.get('/calcs', CalcCtrl.getCalcs)

module.exports = router

