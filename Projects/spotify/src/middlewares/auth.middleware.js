const jwt = require('jsonwebtoken')

const authArtist = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: 'No token provided' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== 'artist') {
            return res.status(403).json({ message: 'Unauthorized access' })
        }

        req.user = decoded

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message || 'Something went wrong' })
    }
}

const authUser = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: 'No token provided' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const roles = ['artist', 'user']

        if (!roles.includes(decoded.role)) {
            return res.status(403).json({ message: 'Unauthorized access' })
        }

        req.user = decoded

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message || 'Something went wrong' })
    }
}

module.exports = {authArtist, authUser}
