const router = require('express').Router()
const {home}=require('../controllers')
// creating router .get
router.get('/', home)

module.exports = router
