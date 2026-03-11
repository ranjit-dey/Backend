const app = require('./src/app')

const notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({ message: '✅ Notes created successfully' })
})

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: '⭐ Notes fetched successfully..',
        notes: notes,
    })
})

/*== DELETE API /notes/1 ==*/
app.delete('/notes/:id', (req, res) => {
    const index = parseInt(req.params.id)
    if (index < 0 || index >= notes.length) {
        return res.status(404).json({ message: '😵‍💫 Note not found' })
    }
    notes.splice(index, 1)
    res.status(200).json({ message: '🧹 Note deleted successfully.' })
})

/*== UPDATE API /notes/1 ==*/
app.patch('/notes/:id', (req, res) => {
    const index = req.params.id
    const title = req.body.title
    const desc = req.body.description

    notes[index].title = title
    notes[index].description = desc

    res.status(200).json({ message: '✅ Note updated successfully', note: notes[index] })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
