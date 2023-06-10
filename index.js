const express = require('express')

const home = require('./route/home')

const app = express()

app.use(express.json())

app.get('/home', (req, res) => {
    res.send('home')
  })

const port = process.env.port || 9001

app.listen(port, ()=> {
    console.log(`app listend port ${port}`);
})