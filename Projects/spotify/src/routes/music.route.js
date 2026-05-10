const musicController = require('../controllers/music.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = require('express').Router()
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage(),
})

router.post('/create-music', authMiddleware.authArtist, upload.single('music'), musicController.createMusic)
router.post('/create-album', authMiddleware.authArtist, musicController.createAlbum)
router.get('/musics', authMiddleware.authUser, musicController.getAllMusic)
router.get('/albums', authMiddleware.authUser, musicController.getAllAlbums)
router.get('/albums/:albumId', authMiddleware.authUser, musicController.getAlbumById)
module.exports = router
