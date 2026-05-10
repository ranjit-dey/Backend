const express = require('express')
const { registerUser, createPost } = require('../controllers/auth.controller')

const router = express.Router()

router.post('/register', registerUser)

router.get('/cookie', (req, res) => {
    res.json({token : req.cookies})
})

router.post('/create-post', createPost)

module.exports = router
