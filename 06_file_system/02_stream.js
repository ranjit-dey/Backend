const fs = require('fs')

// Read stream (small chunks to make it visible)
const readStream = fs.createReadStream('input.txt', {
    highWaterMark: 20 // small chunk size
})

// Write stream
const writeStream = fs.createWriteStream('output.txt')

// Listen for incoming data
readStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk.toString())

    // Simulate delay so you can SEE it happening
    setTimeout(() => {
        writeStream.write(chunk)
        console.log('Written chunk\n')
    }, 500)
})

readStream.on('end', () => {
    console.log('Finished reading file')
    writeStream.end()
})
