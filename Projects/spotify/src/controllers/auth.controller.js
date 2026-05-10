const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { username, email, password, role = 'user' } = req.body

    const existingUser = await userModel.findOne({
        $or: [{ username }, { email }],
    })

    if (existingUser) {
        const errors = {}

        if (existingUser.username === username) {
            errors.username = 'Username already exists'
        }

        if (existingUser.email === email) {
            errors.email = 'Email already exists'
        }

        return res.status(409).json({
            message: 'Validation error',
            errors,
        })
    }

    const allowedRoles = ['user', 'artist']
    if (!allowedRoles.includes(role)) {
        return res.status(400).json({
            message: 'Validation error',
            errors: {
                role: 'Invalid role. Allowed: user, artist',
            },
        })
    }

    const saltRounds = 12
    const hashPassword = await bcrypt.hash(password, saltRounds)

    const user = await userModel.create({
        username,
        email,
        password: hashPassword,
        role,
    })

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({ message: 'User registered succesfully.', user })
}

async function loginUser(req, res) {
    const { username, email, password } = req.body
    try {
        const user = await userModel.findOne({
            $or: [{ username }, { email }],
        })

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET)

        res.cookie('token', token)

        res.status(200).json({
            message: 'User loggedin successfully',
            user: {
                username: user.username,
                email: user.email,
                role: user.role,
            },
        })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error })
    }
}

async function logoutUser(req, res){
    res.clearCookie('token')
    res.status(200).json({message : "user logged out successfully"})
}

module.exports = { registerUser, loginUser, logoutUser }
