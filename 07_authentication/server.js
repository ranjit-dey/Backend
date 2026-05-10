require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')

connectDB()
const port = process.env.PORT || 5003

app.listen(port, () => {
    console.log('server is running\nhttp://localhost:' + port)
})
