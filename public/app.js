// const toggleCompleted = (completed, id) => {
//     const formData = new FormData()
//     formData.append("completed", !completed)
//     fetch("/api/todos/" + id, {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: formData
//     }).then(data =>data.json())
//     .then(data => {console.log(data)})
// }

const addNewTodo = e => {
    if (e.keyCode === 13) {
        $.post("/api/todos/", { name: e.target.value })
            .then(data => {
                document.querySelector("#add-todo").value = ""
                addTodos([data])
            })
            .catch(err => {console.log(err)})
    }

}

const addTodos = objs => objs.forEach(obj => {
    const li = $(`<li aria-id='${obj._id}' class='${obj.completed ? 'done' : ''}'>${obj.name}<button class='delete'>X</button></li>`)
    $(".todos").append(li)
})

$(document).ready(() => {
    $.getJSON("/api/todos")
        .then(addTodos)
    
    $("#add-todo").on("keyup", addNewTodo)

    $(".todos").on('click', 'button' , () => {
        $(this).parent().remove()
        console.log($(this).parent().text())
        // $.ajax({
        //     method: "DELETE",
        //     url: "/api/todos/" + $(this).parent().data("id")
        // }).then(data => {console.log(data)})
    })
})