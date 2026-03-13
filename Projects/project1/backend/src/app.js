const express = require('express')
const postModel = require('./models/post.model')
const multer = require('multer')
const uploadFile = require('../src/services/storage.service')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single('image'), async (req, res) => {
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    })
    post.save
    res.status(201).json({ message: 'post created successfully', post })
})

app.get('/posts', async (req, res) => {
    const posts = await postModel.find()
    res.status(200).json({ message: 'all posts fetch successfully', posts })
})

module.exports = app
