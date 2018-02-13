const express = require('express')
const app = express()

global.loginMessage = "Login"

app.get('/', (req, res) => {
    // express automatically detects Content-Type
    res.send(`
        <html>
            <head>
                <title>Login</title>
            </head>
                <body>
                    <h3>${global.loginMessage}</h3>
                    <form action="/login">
                        username: <input type="username" name="username"/><br>
                        Password: <input type="password" name="password"/><br>
                        <input type="submit" value="Login"><br>
                    </form>
                </body>
        </html>
    `)
})

app.get('/login', (req, res) => {
    let username = req.query.username
    let password = req.query.password
    if (password !== 'ppp') {
        global.loginMessage = 'Password incorrect! Try again!'
        return res.redirect('/')
    }
    global.loginMessage = "Login"
    res.send(`Username: ${username} Password: ${password}`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('The server is running at port', port)
})