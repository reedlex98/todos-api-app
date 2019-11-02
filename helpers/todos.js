const db = require("../models")

exports.getTodos = function (req, res) {
    db.Todo.find()
        .then(function(todos) {
            res.json(todos)
        })
        .catch(function (err) {
            res.send(err)
        })
}

exports.getSpecificTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
        .then(foundTodo => {res.json(foundTodo)})
        .catch(err => {res.send(err)})
}

exports.postTodos = function(req,res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo)
        })
        .catch(function (err) {
            console.log(err)
        })
}

exports.putTodos = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {useFindAndModify: false, new:true})
        .then(function(todo){
            res.json(todo)
        })
        .catch(err => {res.send(err)})   
}

exports.deleteTodos = function(req, res) {
    db.Todo.remove({_id: req.params.todoId})
        .then(function(todo){
            res.json({message: "we just deleted it"})
        })
        .catch(err => {res.send(err)})   
}