const dotenv = require('dotenv')
dotenv.config()

const app = require('./src/app')


const connectDB = require('./src/db/db')

connectDB()


app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(3000, () => {
    console.log('app is listening on 3000')
})
