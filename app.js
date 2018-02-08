const express = require('express')
const app = express()

global.loginmessage = "Login"

app.get('/', (req, res) => {
    // express automatically detects Content-Type
    res.send(`
        <html>
            <head>
                <title>Login</title>
            </head>
                <body>
                    <form>
                        username: <input type="username" name="username" value="username"/><br>
                        Password: <input type="password" name="password" value="password"/><br>
                        <input type="submit" value="Login"><br>
                    </form>
                </body>
        </html>
    `)
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('The server is running at port', port)
})