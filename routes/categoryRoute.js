const router = require('express').Router()
const { addCategory } = require('../controllers/categoryController')

router.post('/addcategory', addCategory)

module.exports = router