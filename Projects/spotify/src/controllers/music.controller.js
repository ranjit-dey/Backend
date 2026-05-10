const { uploadFile } = require('../services/storage.service')
const musicModel = require('../models/music.model')
const albumModel = require('../models/album.model')

async function createMusic(req, res) {
    try {
        const { title } = req.body
        const file = req.file

        const result = await uploadFile(file)

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id,
        })

        res.status(201).json({
            message: 'Music created succesfully',
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist,
            },
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "You don't have access to create a music." })
    }
}

async function createAlbum(req, res) {
    try {
        const { title, musicIds } = req.body

        const album = await albumModel.create({
            title,
            musics: musicIds,
            artist: req.user.id,
        })

        res.status(201).json({
            message: 'Album created successfully.',
            album,
        })
    } catch (error) {
        console.error('ERROR:', error)

        return res.status(500).json({
            message: error.message,
        })
    }
}

async function getAllMusic(req, res) {
    try {
        const musics = await musicModel.find().skip(1).limit(5).populate('artist', 'username email')

        res.status(200).json({
            message: 'All music fetched successfully',
            count: musics.length,
            musics,
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: 'Failed to fetch music',
        })
    }
}

async function getAllAlbums(req, res) {
    try {
        /*== It takes so much time to load as all the music will load ==*/
        // const albums = await albumModel
        //     .find()
        //     .populate('artist', 'username email')
        //     .populate('musics', 'title')

        /*== here we load only the album details without loading the musics ==*/
        const albums = await albumModel.find().select('title artist')

        res.status(200).json({
            message: 'All album fetched successfully',
            count: albums.length,
            albums,
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: 'Failed to fetch music',
        })
    }
}

async function getAlbumById(req, res) {
    const albumId = req.params.albumId
    try {
        const album = await albumModel.findById(albumId).populate('artist', 'username email')
        if (!album) {
            return res.status(404).json('Album not found')
        }
        res.status(200).json({ message: 'Album fetch successfully..', album })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message || 'Album not fetch' })
    }
}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbums, getAlbumById }
