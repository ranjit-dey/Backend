const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: [true, 'username already exist.'],
        },
        email: {
            type: String,
            required: true,
            unique: [true, 'username already exist.'],
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'artist'],
            default: 'user',
        },
    },
    { timestamps: true, versionKey: false },
)

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
