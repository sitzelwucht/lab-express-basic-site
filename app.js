const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log(__dirname)
})

app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})