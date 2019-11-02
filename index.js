const express = require('express')
app = express()
port = process.env.PORT || 3000 // process.env.PORT (for cloud9 environment)
const todoRoutes = require('./routes/todos')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname +'/public'))

app.get('/', function (req, res) {
    res.sendFile("index.html")
})

app.use('/api/todos', todoRoutes)

app.listen(port, function() {
    console.log("Program running at "+ port)
})
