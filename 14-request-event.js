const http = require('http')

// Normal Method of Creating a server
// const server = http.createServer((req,res) => {
//     res.end('welcome')
// })


// another method using event emitter API

const server = http.createServer()

server.on('request', (req,res) => {
    res.end('welcome')
})

server.listen(5000)