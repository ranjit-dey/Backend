const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
    const extName = String(path.extname(filePath).toLowerCase())

    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        ".json" : "text/json",
        ".md": "text/md"
    }

    const contentType = mimeTypes[extName] || 'application/octet-stream'

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'content-type': 'text/html' })
                res.end('404: File Not Found BRO')
            }
        } else {
            res.writeHead(200, { 'content-type': contentType })
            res.end(content, 'utf-8')
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
