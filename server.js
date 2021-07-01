const express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())

app.get('/', function (req, res) {
    res.json( [
        { username: 'Dodi'},
        { username: 'ahmad'},
        { username: 'rana'}]
        )
})
app.listen(3000)