const express = require('express')
const router = express.Router()
const helpers = require("../helpers/todos")

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.postTodos)

router.route('/:todoId')
    .get(helpers.getSpecificTodo)
    .put(helpers.putTodos)
    .delete(helpers.deleteTodos)

module.exports = router