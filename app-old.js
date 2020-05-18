const http = require('http')

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })

        let ouput = {
                name: 'Abraham',
                age: 21,
                url: req.url
            }
            // JSON.stringify (serializa el objeto a formato json)
        res.write(JSON.stringify(ouput))
        res.end()
    })
    .listen(8080)