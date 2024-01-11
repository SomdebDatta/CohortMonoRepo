// JSON = require("json")

const oldTodoList = [
    {title: "Hello", description: "bye", id: 123},
    {title: "Hello", description: "bye", id: 1},
    {title: "Hello", description: "bye", id: 1234},
    // {title: "Hello", description: "bye", id: 1}
]


function addTodoToDom() {
      
}

function removeTodoFromDom(todo) {
  
}

function updateTodoInDom(oldTodo, newTodo) {
    
}

function updateState(newTodos) {
    // calculate the diff b/w newTodos and oldTodos.
    // More specifically, find out what todos are - 
    // 1. added
    // 2. deleted
    // 3. updated
    const added = [];
    const deleted = [];
    const updated = [];
    // calculate these 3 arrays
    // call addTodo, removeTodo, updateTodo functions on each of the
    // elements
    oldTodoState = newTodos;
    return oldTodoState;
}

let added = [];
let deleted = [];
let updated = [];

const todosNewList = [
    // {title: "Hello", description: "bye", id: 123},
    {title: "Hello", description: "bye", id: 1},
    {title: "Hello", description: "bye re", id: 1234},
    {title: "Hello", description: "byeeeee", id: 12}
]

oldTodoList.forEach(function(oldTodo) {
    const id = oldTodo.id;
    // console.log(id);
    // response = todosNewList.findIndex(function(newTodo) {
    //     if (newTodo.id == id) {
    //         console.log(newTodo, oldTodo);
    //         if (oldTodo.title == newTodo.title && oldTodo.description == newTodo.description) {
    //             console.log("Exact same")
    //         }
    //         else {console.log("These are not the exact same!")}
    //     }
    // })
    // console.log(response);
    newTodoIndex = todosNewList.findIndex(newTodo => newTodo.id == id);
    
    if (newTodoIndex == -1) {
        // console.log(oldTodo, "Does not exist in the new list");
        deleted.push(oldTodo)
        console.log("deleted ", oldTodo);
    }
    else {
        if (oldTodo.title == todosNewList[newTodoIndex].title
            && oldTodo.description == todosNewList[newTodoIndex].description) {
                console.log("same hai pura", oldTodo);
                todosNewList.splice(newTodoIndex, 1);
                console
            }
        else {
            console.log("thoda toh alag hai");
            updated.push(todosNewList[newTodoIndex]);
            todosNewList.splice(newTodoIndex, 1);
        }
    }
    added = todosNewList;
})
console.log(`Added - ${JSON.stringify(added)},
Deleted - ${JSON.stringify(deleted)},
updated - ${JSON.stringify(updated)}`);