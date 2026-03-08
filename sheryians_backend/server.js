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
    
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
