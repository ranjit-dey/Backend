const connectDB = require('./db')
const { users } = require('./db/schema.js')

const insertToDB = async () => {
    await connectDB
        .insert(users)
        .values({ name: 'Ranjit', age: '43', email: 'ranjitdey05265@gmail.com' })
}

const deleteTable = async () => {
    await connectDB.execute(`TRUNCATE TABLE users RESTART IDENTITY CASCADE`)
}

const main = async () => {
    try {
        await deleteTable()
        await insertToDB()
        console.log('Seeded successfully ✅')
    } catch (err) {
        console.error('Error ❌', err)
    } finally {
        process.exit(0)
    }
}

main()
