const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: [true, 'Album name must be unique'],
            required: true,
        },
        artist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        musics: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'music',
            },
        ],
    },
    { timestamps: true, versionKey: false },
)

const albumModel = mongoose.model('album', albumSchema)

module.exports = albumModel
