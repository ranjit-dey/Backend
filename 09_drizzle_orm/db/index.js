require('dotenv').config()
const { drizzle } = require('drizzle-orm/node-postgres')

const connectDB = drizzle(process.env.DATABASE_URL)

module.exports = connectDB
