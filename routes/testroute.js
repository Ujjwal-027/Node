const express = require('express')
const { testfunction } = require('../controllers/testcontroller')
const router = express.Router()

router.get('/test', testfunction)

module.exports = router