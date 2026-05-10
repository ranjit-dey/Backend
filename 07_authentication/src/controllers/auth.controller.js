const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { name, username, email, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: 'User already exists.',
        })
    }
    const user = await userModel.create({
        name,
        username,
        email,
        password,
    })

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
    )

    res.cookie('token', token)

    res.status(201).json({
        message: 'User registered successfully.',
        user,
        token,
    })
}

async function createPost(req, res) {
    const token = req.cookies?.token

    if (!token) {
        res.status(401).json({ message: 'No token found' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findOne({_id: decoded.id})
        console.log(user)
    } catch (error) {
        res.status(401).json({ message: 'Invalid token provided' })
    }

    res.status(201).json({ message: 'Post created' })
}

module.exports = { registerUser, createPost }
