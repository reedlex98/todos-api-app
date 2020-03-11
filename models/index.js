// connect to mongoose
require('dotenv/config')
const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING

mongoose.set('debug',true)
mongoose.set('useUnifiedTopology',true)
mongoose.connect(connectionString, {useNewUrlParser: true })

mongoose.Promise = Promise 

module.exports.Todo = require("./todo")