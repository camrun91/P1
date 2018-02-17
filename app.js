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
    res.send(`Hi ${username} Your Password is ${password}<BR>
    <HTML>
        </HEAD>
        <BODY>
            <BR>Please Choose where to go 
            <form action="/follow">
                <input type="radio" name="site"  value="http://cs.uco.edu" checked>CS Webpage 
                <input type="radio" name="site"  value="http://cs3.uco.edu">Dr. Sung's Home<BR>
                <input type="radio" name="site" >Input your site http:// <input type="text" name="othersite"><BR>
                 <input type="submit" value="GO!" name="submit" >
            </form>
        </BODY>
    </HTML>`)
})

app.get('/follow',(req,res) => {
    let site = req.query.site
    let othersite = req.query.othersite
    if(othersite == "")
        return res.redirect(site)
    else
        return res.redirect("http://"+othersite)
    
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('The server is running at port', port)
})