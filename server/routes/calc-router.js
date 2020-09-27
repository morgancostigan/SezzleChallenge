
const express = require('express')

const CalcCtrl = require('../controllers/calc-controller')

const router = express.Router()

router.post('/cal-cal-cal', CalcCtrl.createCalcs)
router.put('/cal-cal-cal/:id', CalcCtrl.updateCalcs)
router.get('/cal-cal-cal/:id', CalcCtrl.getCalcsById)

module.exports = router

