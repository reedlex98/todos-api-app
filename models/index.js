// connect to mongoose

const mongoose = require('mongoose')
const connectionString = "mongodb+srv://rdx98:123@todosdb-9lzik.gcp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.set('debug',true)
mongoose.set('useUnifiedTopology',true)
mongoose.connect(connectionString, {useNewUrlParser: true })

mongoose.Promise = Promise 

module.exports.Todo = require("./todo")