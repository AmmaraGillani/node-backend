const express = require ('express')
const app = express()

require('dotenv').config()
const port = 4000;

app.get('/',(req,res) => {
    res.send('helloAmmara')
})

app.get('/login', (req, res) => {
    res.send('<h1>hello from login</h1>')
})

app.get('/sign-up', (req, res) => {
    res.send('<h2>Hello from SignUP</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Hello i'm running on port ${process.env.PORT}`)
})
