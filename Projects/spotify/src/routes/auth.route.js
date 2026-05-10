const express = require('express')
const authConroller = require('../controllers/auth.controller')


const router = express.Router()

router.post('/register', authConroller.registerUser)
router.post('/login', authConroller.loginUser)
router.post('/logout', authConroller.logoutUser)

module.exports = router
