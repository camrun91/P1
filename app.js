const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // express automatically detects Content-Type
    res.send(`
        <html>
            <head><title>Hello</title></head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `)
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('The server is running at port', port)
})