const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200 //indicates a successful response
    res.setHeader('Content-Type', 'text/plain') //setting Content-Type header
    res.end('Hello World!!\n') // closing the response, adding the content as an argument to end()
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})