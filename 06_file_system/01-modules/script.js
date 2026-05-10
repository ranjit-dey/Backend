const fs = require('node:fs')

console.log("Start execution")
const contents = fs.readFileSync('notes.txt', 'utf-8')
fs.writeFileSync('copy.txt', contents, 'utf-8')

console.log("End execution")
