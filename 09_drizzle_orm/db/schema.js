const { integer, pgTable, varchar, timestamp } = require('drizzle-orm/pg-core')

/*== USERS TABLE ==*/
const users = pgTable('users', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    createtAt: timestamp('created_at').defaultNow(),
})

/*== BOOKS TABLE ==*/
const books = pgTable('books', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    title: varchar('title', { length: 255 }).notNull(),
    isbn: varchar('isbn', { length: 50 }).unique(),
    createtAt: timestamp('created_at').defaultNow(),
})

/*== AUTHOR TABLE ==*/
const authors = pgTable('author', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('name', { length: 255 }).notNull(),
})

/*== BOOK-AUTHOR (MANY TO MANY) ==*/
const bookAuthors = pgTable('boot_authors', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    bookId: integer('book_id').references(() => books.id).notNull(),
    authorId: integer('author_id').references(() => authors.id).notNull()
})

/*== BOOK COPIES ==*/
const copies = pgTable('copies', {
    id : integer('id').primaryKey().generatedAlwaysAsIdentity(),
    bookId : integer('book_id').references(() => books.id).notNull(),
    status: varchar

})

module.exports = { users, books, authors, bookAuthors }
